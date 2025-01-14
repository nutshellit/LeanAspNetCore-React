# LeanAspNetCore-React
A 'lean' ASP.NET Core 5.0 app that uses Razor Pages for server pages and React for some of the client functionality. The main goal of this example is to show how ASP.NET Core and modern client-side development can be combined in a simple, understandable way. 

Originally it leveraged webpack and Microsoft.AspNetCore.SpaServices. Currently, it uses Vite for client-side builds and Microsoft.AspNetCore.SpaServices.Extensions for integration.

## Prerequisites
.NET 5.0 (or higher) SDK
Node.js 12.0.0 or higher

## Getting started
```
git clone https://github.com/martijnboland/LeanAspNetCore-React.git
cd LeanAspNetCore-React
dotnet run
```
Browse to https://localhost:5001 to see the working app. 

At the first run, it takes a little while before all dependencies are resolved. Just have a little patience. After the first run, things are much faster.

## Dotnet 3.1 usage
A temporary solution has been setup on branch dotnet_3dot1 to allow usage with dotnet3.1
