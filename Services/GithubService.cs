using Draws.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace Draws.Web.Services {
    public class GithubService {
        private const string _username = "Drawserqzez";
        private readonly string _baseUrl = "https://api.github.com";
        private readonly HttpClient _httpClient;

        public GithubService(HttpClient httpClient) {
            _httpClient = httpClient;

            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json")); 
        }

        public async Task<Repository> GetLastEditedRepo() {
            var repos = await GetRepositoriesAsync();
            repos = repos.OrderByDescending(x => x.UpdatedAt);

            return repos.First();
        }

        private async Task<ReadmeFile> GetReadme(Repository repository) {
            Uri requestUri = new Uri($"{_baseUrl}/repos/{_username}/{repository.Name}/readme");
            try {
                var response = await SendRequest(requestUri);

                return await JsonSerializer.DeserializeAsync<ReadmeFile>(await response.Content.ReadAsStreamAsync());
            }
            catch {
                return new ReadmeFile() { };
            }
        }

        public async Task<IEnumerable<Repository>> GetRepositoriesAsync() {
            Uri requestUri = new Uri($"{_baseUrl}/users/{_username}/repos");
            var response = await SendRequest(requestUri);

            var repos = await JsonSerializer.DeserializeAsync<IEnumerable<Repository>>(await response.Content.ReadAsStreamAsync());

            return repos;
        }

        public async Task<Repository> GetRepositoryAsync(string repoName) {
            Uri requestUri = new Uri($"{_baseUrl}/repos/{_username}/{repoName}");
            var response = await SendRequest(requestUri);
            
            Repository repo = await JsonSerializer.DeserializeAsync<Repository>(await response.Content.ReadAsStreamAsync());

            repo.Readme = await GetReadme(repo);

            return repo;
        }

        private async Task<HttpResponseMessage> SendRequest(Uri uri) {
            var response = await _httpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();

            return response;
        }
    }
}