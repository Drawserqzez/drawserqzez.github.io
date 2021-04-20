using Draws.Web.Data;
using System;
using System.Collections.Generic;
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

        private async Task<ReadmeFile> GetReadme(Repository repository) {
            Uri requestUri = new Uri($"{_baseUrl}/repos/{_username}/{repository.Name}/readme");
            var response = await SendRequest(requestUri);

            return await JsonSerializer.DeserializeAsync<ReadmeFile>(await response.Content.ReadAsStreamAsync());
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

            try {
                repo.Readme = await GetReadme(repo);
            }
            catch {
                repo.Readme = null;
            }

            return repo;
        }

        private async Task<HttpResponseMessage> SendRequest(Uri uri) {
            var response = await _httpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();

            return response;
        }
    }
}