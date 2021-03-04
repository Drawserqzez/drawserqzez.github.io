using System;
using System.Text.Json.Serialization;

namespace Draws.Web.Data {
    public class Repository {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("url")]
        public Uri Url { get; set; }
        
        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }

        public ReadmeFile Readme { get; set; }
    }
}