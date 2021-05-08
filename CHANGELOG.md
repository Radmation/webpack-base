            - ** Release 0.0.1 February 12th 2019 **
              - First Commit
            - ** Feature Addition - 0.0.2 - June 11 2019 **
              - Upgrade to Font Awesome Pro 5.9.0
              - JavaScript Upgrades
                - Add universal base class
                  - Fix header scroll capabilities
                  - To Top capabilities 
                  - Input Mask
                  - Front End Validation Library
                - Add utilities class
                  - Clearing Form
                  - Serialize Form
                  - Get Form Inputs
                  - Get Element Height
                  - Scroll To Top
                  - Creating Hidden Input
                  - Set Notifications
                  - Set Loaders
                  - Set Fixed Header
              - Sass
                - Install Sass REM for px fallback calculation
                - Add Default WP Admin Bar Styling
                - Add reusable mixins
                - Update Font Awesome Vars to Pro
                - Update Font Awesome imports to Pro  
              - NPM
                - Font Awesome Pro 5.9.0
                - axios 0.18.0
                - inputmask 4.0.8
                - sass-rem 2.0.1
                - validate.js 0.12.0
              - Composer
                - rakit validation
            - ** Feature Addition - 0.0.3 - July 9 2019 **
              - WP Support
                - Add Footer Menu Location
                - Add ACF Enabled Check to avoid PHP Fatal Errors
              - Sass
                - Add Google Font Compiling support to allow WP Fastest Cache to minify without changing the font family
                - Move theme dependencies inclusions above bootstrap overrides to ensure dependencies arent overwritten
                - Add them colors variable map to theme variables
                - Add each loop for theme colors variable for reusable classes
                - Add theme opacity class for bg and overlay reusable classes
                - Add to top base styling
              - Javascript
                - Add site.js file into app.js for easier compiling
                - Add setFixedNac function to site.js
                - Add window.scrollY support for IE
                - Change base theme class to start with uppercase for standards compliance
              - HTML
                - Add meta for iOS detection to elimintae phone number styling. We do this by default
                - Add to-top to footer for reusability
            - ** Feature Addition - 0.0.4 - September 12 2019 **
              - HTML
                - Add Top Bar HTML in order to allow for JS to stop erroring. Add conditional logic for displaying top bar based off theme settings from ACF
                - Add default navbar
              - NPM
                - Font Awesome Pro 5.10.2
                - Add single build command for dev/production environment build in 1
              - JS
                - Add on keyup/change listeners to remove validation errors
                - Fix navbar JS error (Navbar not being present would cause error till HTML was added)
                - Update fixed height function for smoother fixed navigation display on scroll
                - Dynamic input mask utility
                - Add formatPhoneNumber utility
                - Add isElementInViewport utility
              - WP
                - Adjust ACF Conditional check to not throw error if plugin is not present. This was in the is plugin activated check.
                - Update local ACF file with theme settings and testimonial settings
                - Add Testimonials Post Type
                - Add Theme Settings ACF via local fields
                - Add Top Menu to menus
              - Sass
                - Add wrapper-navbar sass
                - Add animation sass file
                - Remove importing of variables from theme and add it to the root sass file
                - Restructure file inclusion for better global use
            - ** Feature Addition - 0.0.5 - October 10 2019 **
              - NPM
                - Added File Loader
                - Removed Copy Web Pack Plugin
              - Webpack
                - Removed plugin CopyWebPackPlugin
                - Added module file loader                
              - Sass
                - Remove override vars for Font Awesome
                - Add theme vars for theme path and font path
                - Update theme vars google path
              - JS
                - Update utilities scroll to top
                - Update utilities input mask
                - Update utilities notification function, bootstrap standard