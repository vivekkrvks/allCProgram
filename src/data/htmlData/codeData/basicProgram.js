
const myData = {

        one : `<!DOCTYPE html>
        <html>
        
        <head>
          <style>
          .hljs {
            display: block;
            overflow-x: auto;
            padding: .5em;
            color: #383a42;
            background: #fafafa
          }
          
          .hljs-comment,
          .hljs-quote {
            color: #a0a1a7
          }
          
          .hljs-doctag,
          .hljs-keyword,
          .hljs-formula {
            color: #a626a4
          }
          
          .hljs-section,
          .hljs-name,
          .hljs-selector-tag,
          .hljs-deletion,
          .hljs-subst {
            color: #e45649
          }
          
          .hljs-literal {
            color: #0184bb
          }
          
          .hljs-string,
          .hljs-regexp,
          .hljs-addition,
          .hljs-attribute,
          .hljs-meta-string {
            color: #50a14f
          }
          
          .hljs-built_in,
          .hljs-class .hljs-title {
            color: #c18401
          }
          
          .hljs-attr,
          .hljs-variable,
          .hljs-template-variable,
          .hljs-type,
          .hljs-selector-class,
          .hljs-selector-attr,
          .hljs-selector-pseudo,
          .hljs-number {
            color: #986801
          }
          
          .hljs-symbol,
          .hljs-bullet,
          .hljs-link,
          .hljs-meta,
          .hljs-selector-id,
          .hljs-title {
            color: #4078f2
          }
          
          .hljs-emphasis {
            font-style: italic
          }
          
          .hljs-strong {
            font-weight: bold
          }
          
          .hljs-link {
            text-decoration: underline
          }
          
          #mauticform_generalsubscribersform_message {
            color: white;
          }
          
          .mauticform-page-wrapper {
            display: flex!important;
          }
          
          .mauticform-post-success .mauticform-innerform {
            display: none;
          }
          
          .mauticform-row {
            position: relative;
          }
          
          .mauticform-email {
            width: 100%;
          }
          
          .mauticform-description {
            margin-top: 2px;
            margin-bottom: 10px;
          }
          
          .mauticform-error {
            margin-bottom: 10px;
            color: red;
          }
          
          .mauticform-errormsg {
            display: block;
            color: rgba(37, 38, 94, 0.7);
            margin-top: 2px;
            position: absolute;
            top: 26px;
            left: 18px;
            border-radius: 4px;
            font-size: 10px;
          }
          </style>
        </head>
        
        <body>
          <div class="content">
            <h2>Program to Display "Hello, World!"</h2> <pre class="c-exec" style="max-height: 600px;"><code class="c hljs cpp"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>
                <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
                   <span class="hljs-comment">// printf() displays the string inside quotation</span>
                   <span class="hljs-built_in">printf</span>(<span class="hljs-string">"Hello, World!"</span>);
                   <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
                }
                </code></pre>
            <p><strong>Output </strong></p> <pre><samp>Hello, World!
                </samp></pre>
            <hr>
            <h2>How "Hello, World!" program works?</h2>
            <ul>
              <li>The <code>#include<stdio.h></stdio.h></code> is a preprocessor command that tells the compiler to include the contents of <code>stdio.h</code> (standard input and output) file in the program.</li>
              <li>The <code>stdio.h</code> file contains functions such as <code>scanf()</code> and <code>printf()</code> to take input and display output respectively.</li>
              <li>If you use the <code>printf()</code> function without writing <code>#include &lt;stdio.h&gt;</code>, the program will not compile.</li>
              <li>The execution of a C program starts from the <code>main()</code> function.</li>
              <li><code>printf()</code> is a library function to send formatted output to the screen. In this program, <code>printf()</code> displays <samp>Hello, World!</samp> text on the screen.</li>
              <li>The <code>return 0;</code> statement is the <strong>"Exit status"</strong> of the program. In simple terms, the program ends with this statement.</li>
            </ul>
          </div>
        </body>
        
        </html>
        `,

        two: `<div dir="ltr" style="text-align: left;" trbidi="on">
        <b style="color: darkcyan;">Program 2 :</b><br>
        <br>
        <pre class="prettyprint prettyprinted" style=""><span class="com">#include</span><stdio .h=""><span class="str">&lt;stdio.h&gt;</span><span class="pln">
        
        main</span><span class="pun">()</span><span class="pln">
        
        </span><span class="pun">{</span><span class="pln">
        
        </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
        
        </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span><span class="pln">i</span><span class="pun">&lt;=</span><span class="lit">100</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++)</span><span class="pln">
        
        </span><span class="pun">{</span><span class="pln">
        
        printf</span><span class="pun">(</span><span class="str">"%d\n"</span><span class="pun">,</span><span class="pln">i</span><span class="pun">);</span><span class="pln">
        
        </span><span class="pun">}</span><span class="pln">
        
        </span><span class="pun">}</span></stdio></pre>
        Output:-
        <br>
        <blockquote>
        1<br>
        2 <br>
        3<br>
        4<br>
        5<br>
        .<br>
        .<br>
        .<br>
        .<br>
        .<br>
        100</blockquote>
        <b style="color: darkcyan;">Explanation :</b>
        <br>
        <blockquote>
        1.)initialises <b>i</b> as an integer.
        
        2.)Now<b> i</b>=1 and is lesser than 100 so condition satisfies and prints the value of <b>i</b> which is 1.<br>
        3.)Now <b>i</b> is incremented to '2' and again it is less than 100 so condition satisfies and prints the value of <b>i</b> which is '2'.<br>
        4.)It goes like that until <b>i</b> is equal to 100 and it is equal to 100 so it prints 100 than the value of <b>i</b> is incremented to 101 which dissatisfies the condition causing to come out of the loop.<br>
        5.  As there are no statements out of the loop the program terminates.</blockquote>
        <br></div>`

}

export default myData