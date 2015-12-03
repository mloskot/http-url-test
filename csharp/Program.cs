using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using EasyHttp;
using RestSharp;

namespace TestUrl
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = "http://google.com/search?";
            Test_WebRequest(url);
            Test_WebClient(url);
            Test_HttpClient(url);
            Test_EasyHttp(url);
            Test_RestSharp(url);
        }

        private static void Test_WebRequest(string url)
        {
            System.Console.WriteLine("====== System.Net.(Http)WebRequest ======");
            var response = WebRequest.Create(url).GetResponse();
            var reader = new System.IO.StreamReader(response.GetResponseStream());
            var body = reader.ReadToEnd().Trim();
            System.Console.WriteLine(body);
            System.Console.WriteLine("====== Response URL: {0}\n", response.ResponseUri);
        }

        private static void Test_WebClient(string url)
        {
            System.Console.WriteLine("====== System.Net.WebClient ======");
            var client = new System.Net.WebClient();
            var body = client.DownloadString(url);
            System.Console.WriteLine(body);
            System.Console.WriteLine("====== Response URL: unknown\n");
        }

        private static async Task<string> Test_HttpClient_Get(string url)
        {
            var client = new HttpClient();
            var body = await client.GetStringAsync(url);
            return body;
        }
        private static void Test_HttpClient(string url)
        {
            System.Console.WriteLine("====== Microsoft HttpClient ======");
            var t = Test_HttpClient_Get(url);
            t.Wait();
            System.Console.WriteLine(t.Result);
            System.Console.WriteLine("====== Response URL: unknown\n");
        }

        private static void Test_EasyHttp(string url)
        {
            System.Console.WriteLine("====== EasyHttp ======");
            var client = new EasyHttp.Http.HttpClient();
            var response = client.Get(url);
            System.Console.WriteLine(response.RawText);
            System.Console.WriteLine("====== Response URL: {0}\n", response.ContentLocation);
        }

        private static void Test_RestSharp(string url)
        {
            System.Console.WriteLine("====== RestSharp ======");
            var client = new RestSharp.RestClient();
            client.BaseUrl = new Uri(url);
            var request = new RestSharp.RestRequest();
            var response = client.Execute(request);
            System.Console.WriteLine(response.Content);
            System.Console.WriteLine("====== Response URL: {0}\n", response.ResponseUri);
        }
    }
}
