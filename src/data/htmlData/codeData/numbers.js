
const myData = {

        one : `<div dir="ltr" style="text-align: left;" trbidi="on">
        <span style="color: teal;"><b>Program 7:</b></span><br>
        <br>
        <pre class="prettyprint prettyprinted" style=""><span style="color: black;"><span class="com">#include</span></span><span class="str">&lt;stdio.h&gt;</span><span class="pln">
        </span><span style="color: black;"><span class="pln">main</span><span class="pun">()</span></span><span class="pln">
        </span><span style="color: black;"><span class="pun">{</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">,</span><span class="pln">n</span><span class="pun">,</span><span class="pln">sum</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  printf</span><span class="pun">(</span><span class="str">"Enter a number\n"</span><span class="pun">);</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  scanf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,&amp;</span><span class="pln">n</span><span class="pun">);</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln">i</span><span class="pun">&lt;=</span><span class="pln">n</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++)</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  </span><span class="pun">{</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">    sum</span><span class="pun">=</span><span class="pln">sum</span><span class="pun">+</span><span class="pln">i</span><span class="pun">;</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  </span><span class="pun">}</span></span><span class="pln">
        </span><span style="color: black;"><span class="pln">  printf</span><span class="pun">(</span><span class="str">"%d\n"</span><span class="pun">,</span><span class="pln">sum</span><span class="pun">);</span></span><span class="pln">
        </span><span style="color: black;"><span class="pun">}</span></span></pre>
        <span style="color: teal;"><b>Explanation:</b></span>
        <br>
        <ol>
        <li><span style="color: black;">First we initialized<b> i,n, and sum</b> which is declared as <b>zero.</b></span></li>
        <li><span style="color: black;">A number is given by user (say 5).</span></li>
        <li><span style="color: black;">Now the logic is:<b>sum=sum+i</b></span>
        <ul>
        <li><b><span style="color: black;">sum=0+0=0</span></b></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'1' </b> so<b> sum=0+1=1</b>
        </span></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'2' </b> so<b> sum=2+1=3</b></span></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'3' </b> so<b> sum=3+3=6</b></span></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'4' </b> so<b> sum=4+6=10</b></span></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'5' </b> so<b> sum=10+5=15</b></span></li>
        <li><span style="color: black;">for next iteration <b>i</b> becomes <b>'6'</b> which is not less than or equal to 'n'(i.e 5 as we took a value for explanation) then the loop terminates and goes to the next line.</span></li>
        </ul>
        </li>
        <li><span style="color: black;">Then the value of <b>sum</b> which is <b>'15'</b> will be printed. </span></li>
        </ol>
        <span style="color: teal;"><b>Algorithm:-</b></span><br>
        <br>
        1.Assign sum as 0<br>
        2.Read n<br>
        3.Assign i as 0<br>
        4.Repeat steps until i&lt;=n<br>
        &nbsp;&nbsp; 4.1)&nbsp; sum=sum+i<br>
        &nbsp;&nbsp; 4.2)&nbsp; i=i+1<br>
        5.Print Sum<br>
        6.Stop<br>
        <br>
        <span style="color: teal;"><b>FlowChart:</b></span><br>
        <br>
        <div class="separator" style="clear: both; text-align: center;">
        <a href="https://2.bp.blogspot.com/-spGHqf9jCZU/WQIc42m2TDI/AAAAAAAAHf0/8I9B11BuhPwb18Uv3qatSW5RWC4ORPkCwCLcB/s1600/Program%2B7%2BSum%2Bof%2BN%2Bnumbers%2BFlowChart.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img alt="Sum of N numbers FlowChart" border="0" src="https://2.bp.blogspot.com/-spGHqf9jCZU/WQIc42m2TDI/AAAAAAAAHf0/8I9B11BuhPwb18Uv3qatSW5RWC4ORPkCwCLcB/s1600/Program%2B7%2BSum%2Bof%2BN%2Bnumbers%2BFlowChart.png" title="Sum of N numbers FlowChart"></a></div>
        <br>
        <br>
        <span style="color: teal;"><b>Output:</b></span><br>
        <br>
        <div class="separator" style="clear: both; text-align: center;">
        <a href="https://3.bp.blogspot.com/-HbQUlaN7EVo/WCtNvSb1xgI/AAAAAAAAD1k/-cAFoVyR7TA4DRVGwBXSto8EAmzuyRN_gCLcB/s1600/Program%2B7%2BSum%2Bof%2BN%2Bnumbers.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img alt="Sum of N numbers" border="0" src="https://3.bp.blogspot.com/-HbQUlaN7EVo/WCtNvSb1xgI/AAAAAAAAD1k/-cAFoVyR7TA4DRVGwBXSto8EAmzuyRN_gCLcB/s1600/Program%2B7%2BSum%2Bof%2BN%2Bnumbers.png" title="Sum of N numbers"></a></div>
        <br>
        <span style="color: teal;"><b>&nbsp;</b></span>
        
        
        </div>`,

        two: ``

}

export default myData