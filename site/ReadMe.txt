- CSS files are in the css directory. 
- The styles.css file is for web.
- The styles-print.css file is for print.

Which pages meet the following requirements?
1. External stylesheets - all HTML pages link to the styles.css and styles-print.css  files. 
2. Three differences between web CSS and print CSS:
	i) Web CSS hides the <footer> by setting display:none. Print CSS does not hide the footer.
	ii) Font family is different. 
		Web CSS uses ['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] for all elements except figcaption.
		Print CSS uses [Arial, Helvetica, sans-serif] for all elements except figcaption.
	iii) Web CSS uses display:inline-grid for .contact-element. Print CSS uses display:block for .contact-element.
3. Each element selected should have at least one property:value pair assigned to it. Multiple properties are set using these selectors:
	Line 14 in styles.css: #menu > ul 
	Line 35 in styles.css: #menu li>a:hover
	Line 60 in styles.css: #welcome-intro > section
4. Be creative with colors and whitespace, with font types and sizes, special alignments and positioning, page layout, navigation/menu appearance, etc
	- home.html uses flex to display sections inline and centered.
	- resume.html uses flex to display an image and resume overview side by side.
	- resume.html uses a pseudo class to set border-bottom property to none. The selector is .resume section:last-child on line 86 in styles.css.
	- articles.html uses different font colors and background colors for code samples on the page.
	- nav element on each page uses a different color (teal) on hover. The border-radius is also rounded. When a page is selected, the relevant nav link retains teal highlight to indicate the 'active link' to the user.