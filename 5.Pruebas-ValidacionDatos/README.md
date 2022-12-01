# 5. Pruebas de validación de datos
En la carpeta de cada herramienta, se especifican los requisitos e instrucciones de ejecución de las pruebas.

### Herramientas
- Kraken 
- Playwright

### Escenarios
| No. | Funcionality | Scenario | Event generation tool | Data generation technique | Data generation tool | Responsible |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Create Post | As an admin user, I want to create a post | Kraken | A-priori | Mockaroo | MB |
| 2 | Create Post | As an admin user, I want to create a post with a long title | Kraken | A-priori | Mockaroo | MB |
| 3 | Create Post | As an admin user, I want to create a post with a long description | Kraken | A-priori | Mockaroo | MB |
| 4 | Create Post | As an admin user, I want to create a post with custom URL | Kraken | A-priori | Mockaroo | MB |
| 5 | Create Post | As an admin user, I want to create a post with bad URL | Kraken | A-priori | Mockaroo | MB |
| 6 | Create Post | As an admin user, I want to create a post with a future date | Kraken | A-priori | Mockaroo | MB |
| 7 | Create Post | As an admin user, I want to create a post with a past date | Kraken | A-priori | Mockaroo | MB |
| 8 | Create Post | As an admin user, I want to create a post with tags | Kraken | A-priori | Mockaroo | MB |
| 9 | Create Post | As an admin user, I want to create a post with a long tag | Kraken | A-priori | Mockaroo | MB |
| 10 | Create Post | As an admin user, I want to create a post with wrong tags | Kraken | A-priori | Mockaroo | MB |
| 11 | Create Post | As an admin user, I want to create a post with metadata | Kraken | A-priori | Mockaroo | MB |
| 12 | Create Post | As an admin user, I want to create a post with long metadata | Kraken | A-priori | Mockaroo | MB |
| 13 | Create Post | As an admin user, I want to create a post with a facebook card | Kraken | A-priori | Mockaroo | MB |
| 14 | Create Post | As an admin user, I want to create a post with long facebook card data | Kraken | A-priori | Mockaroo | MB |
| 15 | Delete Post | As an admin user, I want to create a post with the email content | Kraken | A-priori | Mockaroo | MB |
| 16 | Create Post | As an admin user, I want to create a post | Kraken | Random | Faker | MB |
| 17 | Create Post | As an admin user, I want to create a post with a long title | Kraken | Random | Faker | MB |
| 18 | Create Post | As an admin user, I want to create a post with a long description | Kraken | Random | Faker | MB |
| 19 | Create Post | As an admin user, I want to create a post with custom URL | Kraken | Random | Faker | MB |
| 20 | Create Post | As an admin user, I want to create a post with bad URL | Kraken | Random | Faker | MB |
| 21 | Create Post | As an admin user, I want to create a post with a future date | Kraken | Random | Faker | MB |
| 22 | Create Post | As an admin user, I want to create a post with a past date | Kraken | Random | Faker | MB |
| 23 | Create Post | As an admin user, I want to create a post with tags | Kraken | Random | Faker | MB |
| 24 | Create Post | As an admin user, I want to create a post with a long tag | Kraken | Random | Faker | MB |
| 25 | Create Post | As an admin user, I want to create a post with wrong tags | Kraken | Random | Faker | MB |
| 26 | Create Post | As an admin user, I want to create a post with metadata | Kraken | Random | Faker | MB |
| 27 | Create Post | As an admin user, I want to create a post with long metadata | Kraken | Random | Faker | MB |
| 28 | Create Post | As an admin user, I want to create a post with a facebook card | Kraken | Random | Faker | MB |
| 29 | Create Post | As an admin user, I want to create a post with long facebook card data | Kraken | Random | Faker | MB |
| 30 | Create Post | As an admin user, I want to create a post with the email content | Kraken | Random | Faker | MB |
| 31 | Create Tag | As an admin user, I want to create a tag with just the name | Playwright | A-priori | Mockaroo | NG |
| 32 | Create Tag | As an admin user, I want to create a tag with just the name | Playwright | Pseudo-random | Mockaroo | NG |
| 33 | Create Tag | As an admin user, I want to create a tag with just the name | Playwright | Random | Faker | NG |
| 34 | Create Tag | As an admin user, I want to create a tag with just the name and a description | Playwright | A-priori | Mockaroo | NG |
| 35 | Create Tag | As an admin user, I want to create a tag with just the name and a description | Playwright | Pseudo-random | Mockaroo | NG |
| 36 | Create Tag | As an admin user, I want to create a tag with just the name and a description | Playwright | Random | Faker | NG |
| 37 | Create Tag | As an admin user, I want to create a tag with just the name and a long description | Playwright | A-priori | Mockaroo | NG |
| 38 | Create Tag | As an admin user, I want to create a tag with just the name and a long description | Playwright | Pseudo-random | Mockaroo | NG |
| 39 | Create Tag | As an admin user, I want to create a tag with just the name and a long description | Playwright | Random | Faker | NG |
| 40 | Create Tag | As an admin user I want to create a tag with the name, a specific slug and a description | Playwright | A-priori | Mockaroo | NG |
| 41 | Create Tag | As an admin user I want to create a tag with the name, a specific slug and a description | Playwright | Pseudo-random | Mockaroo | NG |
| 42 | Create Tag | As an admin user I want to create a tag with the name, a specific slug and a description | Playwright | Random | Faker | NG |
| 43 | Create Tag | As an admin user, I want to create a tag with just the name and a specific long slug | Playwright | A-priori | Mockaroo | NG |
| 44 | Create Tag | As an admin user, I want to create a tag with just the name and a specific long slug | Playwright | Pseudo-random | Mockaroo | NG |
| 45 | Create Tag | As an admin user, I want to create a tag with just the name and a specific long slug | Playwright | Random | Faker | NG |
| 46 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (HEX value) | Playwright | A-priori | Mockaroo | NG |
| 47 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (HEX value) | Playwright | Pseudo-random | Mockaroo | NG |
| 48 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (HEX value) | Playwright | Random | Faker | NG |
| 49 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (Non HEX value) | Playwright | A-priori | Mockaroo | NG |
| 50 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (Non HEX value) | Playwright | Pseudo-random | Mockaroo | NG |
| 51 | Create Tag | As an admin user, I want to create a tag with just the name and a specific color (Non HEX value) | Playwright | Random | Faker | NG |
| 52 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card | Playwright | A-priori | Mockaroo | NG |
| 53 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card | Playwright | Pseudo-random | Mockaroo | NG |
| 54 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card | Playwright | Random | Faker | NG |
| 55 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card (facebook name long) | Playwright | A-priori | Mockaroo | NG |
| 56 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card (facebook name long) | Playwright | Pseudo-random | Mockaroo | NG |
| 57 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card (facebook name long) | Playwright | Random | Faker | NG |
| 58 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc (+2000 char) | Playwright | A-priori | Mockaroo | NG |
| 59 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc (+2000 char) | Playwright | Pseudo-random | Mockaroo | NG |
| 60 | Create Tag | As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc (+2000 char) | Playwright | Random | Faker | NG |
| 61 | Create Member | As an admin user, I want to create a new member with name and email | Playwright | A-priori | Mockaroo | IR |
| 62 | Create Member | As an admin user, I want to create a new member with name, email and note | Playwright | A-priori | Mockaroo | IR |
| 63 | Create Member | As an admin user, I want to create a new member with email, note and label | Playwright | A-priori | Mockaroo | IR |
| 64 | Update WebSite | As an admin user, I want to update website title and description | Playwright | A-priori | Mockaroo | IR |
| 65 | Update WebSite | As an admin user, I want to update metadata website | Playwright | A-priori | Mockaroo | IR |
| 66 | Update WebSite | As an admin user, I want to update twitter card | Playwright | A-priori | Mockaroo | IR |
| 67 | Update WebSite | As an admin user, I want to update facebook card | Playwright | A-priori | Mockaroo | IR |
| 68 | Update WebSite | As an admin user, I want to update social networks urls | Playwright | A-priori | Mockaroo | IR |
| 69 | Edit Profile | As an admin user I want to edit the owner profile full name, slug | Playwright | A-priori | Mockaroo | IR |
| 70 | Edit Profile | As an admin user I want to edit the owner profile location, website, Facebook Profile, Twitter profile and Bio | Playwright | A-priori | Mockaroo | IR |
| 71 | Create Member | As an admin user, I want to create a new member with name and email | Playwright | Pseudo-random | Mockaroo | IR |
| 72 | Create Member | As an admin user, I want to create a new member with name, email and note | Playwright | Pseudo-random | Mockaroo | IR |
| 73 | Create Member | As an admin user, I want to create a new member with email, note and label | Playwright | Pseudo-random | Mockaroo | IR |
| 74 | Update WebSite | As an admin user, I want to update website title and description | Playwright | Pseudo-random | Mockaroo | IR |
| 75 | Update WebSite | As an admin user, I want to update metadata website | Playwright | Pseudo-random | Mockaroo | IR |
| 76 | Update WebSite | As an admin user, I want to update twitter card | Playwright | Pseudo-random | Mockaroo | IR |
| 77 | Update WebSite | As an admin user, I want to update facebook card | Playwright | Pseudo-random | Mockaroo | IR |
| 78 | Update WebSite | As an admin user, I want to update social networks urls | Playwright | Pseudo-random | Mockaroo | IR |
| 79 | Edit Profile | As an admin user I want to edit the owner profile full name, slug | Playwright | Pseudo-random | Mockaroo | IR |
| 80 | Edit Profile | As an admin user I want to edit the owner profile location, website, Facebook Profile, Twitter profile and Bio | Playwright | Pseudo-random | Mockaroo | IR |
| 81 | Create Member | As an admin user, I want to create a new member with name and email | Playwright | Random | Faker | IR |
| 82 | Create Member | As an admin user, I want to create a new member with name, email and note | Playwright | Random | Faker | IR |
| 83 | Create Member | As an admin user, I want to create a new member with email, note and label | Playwright | Random | Faker | IR |
| 84 | Update WebSite | As an admin user, I want to update website title and description | Playwright | Random | Faker | IR |
| 85 | Update WebSite | As an admin user, I want to update website metadata | Playwright | Random | Faker | IR |
| 86 | Update WebSite | As an admin user, I want to update website twitter card | Playwright | Random | Faker | IR |
| 87 | Update WebSite | As an admin user, I want to update website facebook card | Playwright | Random | Faker | IR |
| 88 | Update WebSite | As an admin user, I want to update website social networks urls | Playwright | Random | Faker | IR |
| 89 | Edit Profile | As an admin user I want to edit the owner profile full name, slug and location | Playwright | Random | Faker | IR |
| 90 | Edit Profile | As an admin user I want to edit the owner profile website, Facebook Profile, Twitter profile and Bio | Playwright | A-priori | Faker | IR |
| 91 | Edit Profile | As an admin user, I want to update my name with an empty name | Playwright | A-priori | Faker | CT |
| 92 | Edit Profile | As an admin user, I want to update my name with a name too long | Playwright | Pseudo-random | Faker | CT |
| 93 | Edit Profile | As an admin user, I want to update my email with an empty email | Playwright | A-priori | Faker | CT |
| 94 | Edit Profile | As an admin user, I want to update my email with an invalid email | Playwright | Pseudo-random | Faker | CT |
| 95 | Edit Profile | As an admin user, I want to update my website with an invalid URL | Playwright | A-priori | Faker | CT |
| 96 | Edit Profile | As an admin user, I want to update my website with an URL that exceeds max length | Playwright | Random | Faker | CT |
| 97 | Edit Profile | As an admin user, I want to update my bio with a bio that exceeds max length | Playwright | A-priori | Faker | CT |
| 98 | Edit Profile | As an admin user, I want to update my password with my old password incorrect | Playwright | Pseudo-random | Faker | CT |
| 99 | Edit Profile | As an admin user, I want to update my password with a verify password that does not match | Playwright | Random | Faker | CT |
| 100 | Edit Profile | As an admin user, I want to update my password with a new password insecure | Playwright | Pseudo-random | Faker | CT |
| 101 | Edit Profile | As an admin user, I want to update my password with the same password as before | Playwright | Random | Faker | CT |
| 102 | Create Page | As an admin user, I want to create a page with a publish date incorrect | Playwright | Random | Faker | CT |
| 103 | Create Page | As an admin user, I want to create a page with title and body without publishing it | Playwright | Random | Faker | CT |
| 104 | Create Page | As an admin user, I want to create a page with title and body and schedule it for later | Playwright | Random | Faker | CT |
| 105 | Create Page | As an admin user, I want to create a page with title and body and publish it | Playwright | Random | Faker | CT |
| 106 | Create Page | As an admin user, I want to create a page with title, body and page URL and publish it | Playwright | Random | Faker | CT |
| 107 | Create Page | As an admin user, I want to create a page with title, body and excerpt and publish it | Playwright | Random | Faker | CT |
| 108 | Create Page | As an admin user, I want to create a page with title, body and feature image and publish it | Playwright | Random | Faker | CT |
| 109 | Create Page | As an admin user, I want to create a page with title and body without publishing it | Playwright | Pseudo-random | Faker | CT |
| 110 | Create Page | As an admin user, I want to create a page with title and body and schedule it for later | Playwright | Pseudo-random | Faker | CT |
| 111 | Create Page | As an admin user, I want to create a page with title and body and publish it | Playwright | Pseudo-random | Faker | CT |
| 112 | Create Page | As an admin user, I want to create a page with title, body and page URL and publish it | Playwright | Pseudo-random | Faker | CT |
| 113 | Create Page | As an admin user, I want to create a page with title, body and excerpt and publish it | Playwright | Pseudo-random | Faker | CT |
| 114 | Create Page | As an admin user, I want to create a page with title, body and feature image and publish it | Playwright | Pseudo-random | Faker | CT |
| 115 | Create Page | As an admin user, I want to create a page with title and body without publishing it | Playwright | A-priori | Faker | CT |
| 116 | Create Page | As an admin user, I want to create a page with title and body and schedule it for later | Playwright | A-priori | Faker | CT |
| 117 | Create Page | As an admin user, I want to create a page with title and body and publish it | Playwright | A-priori | Faker | CT |
| 118 | Create Page | As an admin user, I want to create a page with title, body and page URL and publish it | Playwright | A-priori | Faker | CT |
| 119 | Create Page | As an admin user, I want to create a page with title, body and excerpt and publish it | Playwright | A-priori | Faker | CT |
| 120 | Create Page | As an admin user, I want to create a page with title, body and feature image and publish it | Playwright | A-priori | Faker | CT |
