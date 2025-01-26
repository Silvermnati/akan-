# Akan name generator
The project is known as Akan name generator. Akan name's are names derived from Ghanian culture that are given to children.
It is meant to generate names according to an individual's birth date and year and ypu are able to get your name after insertion.


## Description 
Akan name generator is a simple web application that generate's a user's Akan names based on the day of the week they were born and their gender.
 It helps users discover their Akan name using traditional Akan naming conventions.

 ## Features
  Users input a day of the week and select their gender.
- Akan name is generated based on traditional Akan naming conventions.
- Simple interface with real-time name generation.

## Technologies Used
- **HTML**: For the structure of the web page and form.
- **CSS**: For styling and layout.
- **JavaScript**: For generating the Akan name based on user input.
## How to Use
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/akan-name-generator.git
    ```

2. Open the `akan_name_generator.html` file in your web browser.

3. Enter a valid day of the week (e.g., "Monday", "Tuesday", etc.).

4. Select your gender (Male or Female).

5. Click the "Generate Akan Name" button to get your Akan name.

## Example Usage
- **Input**: "Monday" (Day), "Male" (Gender)  
  **Output**: `Your Akan name is: Kwadwo`
  
- **Input**: "Friday" (Day), "Female" (Gender)  
  **Output**: `Your Akan name is: Afia`

## Code Overview
The project is split into three main parts:
- **HTML**: Contains the structure of the form and layout.
- **CSS**: Provides styling and responsive design for the form.
- **JavaScript**: Contains the logic for handling user input and generating Akan names.

## Troubleshooting
- **Issue**: "Uncaught (in promise) Error: Access to storage is not allowed in this context"  
  **Solution**: Make sure the site is being served over HTTPS and not HTTP. Some browsers restrict access to storage in insecure contexts (non-HTTPS).

- **Issue**: Invalid input for day or gender.  
  **Solution**: Ensure the day of the week is spelled correctly, and a gender is selected.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.


# Licencse
MIT License

Copyright (c) 2025 John Doe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

