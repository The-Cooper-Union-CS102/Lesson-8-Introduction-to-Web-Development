# Introduction to Web Development

Web development is any work done toward the development of web sites.

This usually involves three main components:

* HTML: The basic content of the website, organization.
* CSS: The style of the website, appearance.
* JavaScript: The mechanics of the website, interaction.

This lesson will go through the basics of each of these components,
and give you the knowledge necessary to build a basic website.

This introduction to web development will be closely following
the [HTML Tutorial](https://www.w3schools.com/html/) from W3Schools,
a great resource on web development.

Note that not everything here is considered best practice.  We start
with simple examples that may not be "correct" but are easy to
understand compared to the full "correct" version.

## HTML

HTML stands for "Hyper Text Markup Language".  Hyper Text here, just means
something more than regular text.  Markup means some way of annotating the
text in a way that is not displayed in the end result, similar to someone
leaving notes on an essay (marking it up).  Be careful about the "Language"
part.  HTML is a language, but it is not a programming language like we
have seen.  It is not a programming language because it cannot "do" anything.
If anything, it is more like a data structure.

HTML is the standard language for describing the structure of a web page.
There is basically no other standard way to do it.  This is very unlike
other forms of software development where you could use any programming
language you want.

An HTML document contains "elements", each of which may contain more elements.
An element can be one of many pre-defined types.  The type of the element
tells your web browser how it should be displayed.  Lets take a look at some
examples.

### Hello World

This example simply displays the text "Hello, world!" to the page.  You can
usually view an HTML (or `.htm`) file by typing the file path into your browser
URL bar.

```snippet
{"html": "snippets/basic.htm"}
```

In my case, this file is located at
`/Users/cnezin/cs102/Lesson-8-Introduction-to-Web-Development/snippets/basic.htm`

Note that even though we wrote `<p>` and `</p>` in our file, they do not appear
on the screen.  That is the "Markup" part we were talking about earlier.  These
sequences of characters are called **tags**.  More specifically, `<p>` is a
*start* tag and `</p>` is an *end* tag.  `<p>` says to start a **paragraph**
and `</p>` says to end a paragraph.  The text "Hello, world!" is the
**content**, and the content along with the start tag and end tag is an
**element**.  So this entire file consists of a single paragraph element.

### Boilerplate

Now that we saw the basic anatomy of a single element, we will add some
"boilerplate" code that is common to all HTML documents.

```snippet
{"html": "snippets/boilerplate.htm"}
```

Lets go through what each of these new elements means one by one.

First the **document type** declaration at the top simply says this is an
HTML file.  You should never have to use anything other than `html` as the
document type, unless you need to work with older versions of HTML.  It
is not strictly necessary for you to have this in your file, as it will
usually be generated for you by the browser.

Next, the `<html>...</html>` element defines the entire body of html.  This is
the "root" element meaning all other elements should be contained within it.
Again, it will usually be generated for you if you do not have it in your file.

The `<html>` element should contain both a `<head>` and a `<body>` element.
The `<head>` element contains things which are not directly displayed as
content.  For now all we put in there is the `<title>` element which is the
text that will be displayed in the tab.  We see the `<body>` element contains
the single paragraph element we had in the last example.  Note that all of
these extra things are technically required by the HTML standard, but will be
generated for you if you don't provide them.  It is best practice to provide
them explicitly.

However for space and clarity, we will be leaving them out in all future
examples in which they are not necessary to produce a working result.

### Attributes

All HTML **elements** can also have **attributes**.  An attribute provides
additional information about elements besides their location in the document.
Attributes are specified in the start tag of an element.  Attributes are
usually specified in the following key-value format:

```
<TAG ATTR_1_NAME="ATTR_1_VALUE", ATTR_2_NAME="ATTR_2_VALUE", ...> ...Content... </TAG>
```

As an example, let's say we wanted to create a web page with a link to
W3Schools.  We can do this with with `<a>` tag as follows:

```snippet
{"html": "snippets/hyperlink.htm"}
```

Each element type has a pre-defined set of attributes which you may apply to it.

One very important attribute which all element types share is the `style`
attriute, which tells the browser how the element should be displayed.

### Style

The style attriute of an element says how it should be visually displayed.  The
style of an element is ultimately just a string which is parsed by the browser.
The string takes the form of `key:value` pairs separated by semicolons, taking
the following general format:

```
<TAG style="key1:value1;key2:value2;..."> ...Content... </TAG>
```

Here is an example where we use `style` to make our text red:

```snippet
{"html": "snippets/style1.htm"}
```

We could also make our font size larger:

```snippet
{"html": "snippets/style2.htm"}
```

Or we could do both:

```snippet
{"html": "snippets/style3.htm"}
```

The style of an element **cascades** to all nested elements.  So even if we
create a new element within our `<p>`, the style is still applied, like in
the following example.

```snippet
{"html": "snippets/style4.htm"}
```

This brings us to CSS, or Cascading Style Sheets.

## CSS

### Introduction

CSS is short for Cascading Style Sheets.  This name means that we have a sheet,
or file, of styles for different elements on our web page, and we are going to
apply them in a cascading way, meaning all nested elements will "inherit" the
style of the element it is nested in.

The `style` attribute of an element is really just a special case of CSS,
called **inline** CSS.  A CSS section of an HTML file allows us to apply a
style to multiple occurences of an element without having to write it over and
over.  This means the style will be centralized and easy to make modifications
to.

Lets take a look at an example of using CSS via the `<style>` HTML element.

```snippet
{"html": "snippets/css1.htm"}
```

We can see the same result as using inline style, except now we only need to
write down the style once and it can be magically applied to all elements of
that type.

### Classes

Now, a natural question to ask is: what if we want to style some paragraphs
differently than others?  The solution is the HTML **class** attribute.  This
attribute allows you specify that some element is of a given sub-type or class,
which you can define and reference in style sheets.

For example, here we create and use two classes of paragraph, `cory-red` and
`cory-blue`.

```snippet
{"html": "snippets/css2.htm"}
```

We can also combine multiple classes at the time time.  Here is an example with
one more class `cory-large`.

```snippet
{"html": "snippets/css3.htm"}
```

### ID

We can get even more specific when applying styles and use an ID rather than a
class.  This is usually not preferred over using simple inline style because it
does not offer much benefit except separating the style and the organization.
However, we will see the IDs can be useful later on in JavaScript.

```snippet
{"html": "snippets/css4.htm"}
```

## JavaScript

JavaSciprt is the defacto programming language for the web.  Don't confuse
this language with the other well know language, Java.  They are completely
different, despite the name.

JavaScript is closer to Python than C or C++.  It is not type safe, and it
is interpreted.  The language has several built in features that allow it
to communicate with the web page.  We will view it solely in the context
for now, but it can be used outside of web pages.

### Hello World

First we will modify some HTML element with different text.  Here we are
using the boilerplate HTML template, but we have added some JavaScript at
the bottom using the `<script>` HTML tag.

```snippet
{"html": "snippets/javascript1.htm"}
```

Let's break this down.

First, the `document` is an object provided by the browser.  This is
the main object that allows us to interface with the page.  Second,
`getElementById` is a method of that object which we can use to,
you guessed it, get an element by its ID.  In this case you can see
that in our HTML we created a paragraph with the id `main-body`.
This method returns whatever HTML element has that ID.  If there
is no element with that ID, this method would return `null` which
is similar to Python's `None`.  In this case it returns a valid
element, and we can modify attributes of that element, like `innerHTML`.
In this case we got a simple paragraph with no nested elements, so
it suffices to simply change the value to whatever text we want.
This results in the text being changed as soon as the page is loaded
so we don't see the original text.

This example uses something which we won't cover, called a **Promise** to
create a delay, and show that the code is actually doing something.

```snippet
{"html": "snippets/javascript2.htm"}
```

### Events

Unlike many other languages, the main goal of JavaScript is to work as an
interactive interface with your browser.  Therefore, there are a lot of
features which make it easier for you to program in response to things
happening.  One of these main features is **events**.  With events, you
can write code that runs whenever an event is triggered.  Events are usually
triggered by the user doing something like clicking a button.  Here is an
example.

```snippet
{"html": "snippets/javascript3.htm"}
```

This `changeText` function is a **callback** function, or a function
that is supposed to be run in response to some event.

Lets just take a look at one more example which persists data
between interactions.  Here is a very nice fully fledged cookie
clicker game.

```snippet
{"html": "snippets/javascript4.htm"}
```

The JavaScript has a whole host of other features, including many which
replicate functionality in programming language we've seen already.  I am not
going to go through them here, but you should have an all right time learning
them if you have C and Python down.

## An Actual Web Page

Let's take a look at an example of an actual web page.  First we'll take
a look at a Google web page, then we'll look at one of our own.

```snippet
{"html": "snippets/home.htm", "css": "snippets/home.css", "javascript": "snippets/home.js"}
```
