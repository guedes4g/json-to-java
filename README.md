# json2java README
Json to java converter 

To use run the command `Convert Java From JSON`

Choose a JSON file
Choose where to generate the output java classes

the first class will be the name of the file in PascalCase
The rest of the other classes will also be in PascalCase, but will use the key it is refereed as in the JSON.

## Example input

```json
{
  "name": "Mateus Haas",
  "age": 26,
  "deleted": false,
  "city": {
    "name": "Porto Alegre",
    "state": {
      "name": "RS"
    }
  },
  "companies": [
    {
      "name": "Mercadini"
    },
    {
      "name": "Sala 302"
    },
    {
      "name": "MHAAS"
    }
  ],
  "graduations": [
    2010,
    2020
  ]
}
```

## Features
* Converts JSON to simple POJO
* Allows a quick way to integrate with external APIs generating the DTOs

## Known Issues

Does not convert complex types such as maps and nested lists 

## Release Notes
### 1.0.0
