var contactUrls=["tel","sms","mailto"];function split(e,t){var n=e.indexOf(t);return n>0?e.slice(0,n):""}function cc(e){var t=e.metaKey||e.ctrlKey||"contextmenu"==e.type,n=e.currentTarget.href;t||e.preventDefault(),"undefined"!=typeof fbq&&(contactUrls.indexOf(split(n,":"))>-1?fbq("track","Contact"):fbq("trackCustom","LinkClick",{url:n})),count(e.currentTarget.id,n,t)}for(var link=document.getElementsByClassName("link-button"),i=0;i<link.length;i++)link[i].addEventListener("click",cc,!0),link[i].addEventListener("contextmenu",cc,!0);function ec(e){var t=e.metaKey||e.ctrlKey||"contextmenu"==e.type,n=e.currentTarget.href;contactUrls.indexOf(split(n,":"))>-1?"undefined"!=typeof fbq&&(fbq("track","Contact"),t||(e.preventDefault(),setTimeout((function(){location.href=n}),100))):(t||e.preventDefault(),"undefined"!=typeof fbq&&fbq("trackCustom","LinkClick",{url:n}),count(e.currentTarget.id,n,t))}var soc=document.querySelectorAll(".minimal-button, .contact-button");for(i=0;i<soc.length;i++)soc[i].addEventListener("click",ec,!0),soc[i].addEventListener("contextmenu",ec,!0);function count(e,t,n){var a=new XMLHttpRequest;a.open("POST","/count"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.setRequestHeader("X-CSRF-TOKEN",document.head.querySelector("meta[name='csrf-token']").content),a.onload=n?"":function(){location.href=t},a.send("id="+encodeURIComponent(e)+"&username="+encodeURIComponent(window.location.pathname.split("/")[1]))}var add=document.getElementById("add");if(add&&(add.onclick=function(){location.href=encodeURIComponent(window.location.pathname.split("/")[1]+"/vcf")}),"undefined"!=typeof jQuery){function subscribe(e){if("#"==$(e).attr("action")){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});var t={type:"POST",url:encodeURIComponent(window.location.pathname.split("/")[1]+"/cap"),success:function(e){$(".blank-success-message").show()}}}else t={url:$(e).attr("action").replace("/post?","/post-json?"),jsonp:"c",dataType:"jsonp",cache:!1,success:function(e){if($(".blank-success-message").show(),"success"!=e.result){var t="Error: try again later";e.msg.search("already subscribed")>-1?t="Already subscribed":e.msg.search("too many")>-1?t="Too many recent attempts":e.msg.search("captcha")>-1?t="Error: reCAPTCHA must be disabled":e.msg.search("enter a value")>-1?t="Error: non-email field set to required":console.log(e.msg.replace(/(<([^>]+)>(.*?)<([^>]+)>)/,"")),$(".capture-success").text(t)}}};var n={data:$(e).serialize(),error:function(e){$(".blank-success-message").show().find(".capture-success").text("Error: invalid integration setup"),console.log(e)},complete:function(){$("#email-form, .capture-legal-wrapper").hide(),"undefined"!=typeof fbq&&fbq("trackCustom","EmailCapture")}};$.extend(t,n),$.ajax(t)}document.getElementById("email-form").addEventListener("submit",(function(e){e.preventDefault(),this.querySelector('button[type="submit"]').disabled=!0,""==$("#comment").val()&&subscribe(this)})),$("#email, #phone, #fname").on({focusin:function(){var e=$(".capture-multi-field");if(e.height()<60){var t=e.css({height:"auto"}).height();e.css("height",""),e.animate({height:t},150)}$(".capture-legal-wrapper").animate({opacity:["show"],height:["show"]},100)},focusout:function(){var e=($("#email").val()||"")+($("#phone").val()||"")+($("#fname").val()||"");setTimeout((function(){if(""==e&&-1==$.inArray(document.activeElement.id,["email","phone","fname"])){var t=$(".capture-multi-field"),n=t.css({height:""}).height();t.css("height","auto"),t.animate({height:n},150),$(".capture-legal-wrapper").animate({opacity:["hide"],height:["hide"]},150)}}),100)}})}var btn=document.getElementsByClassName("twitch-chat-open"),toggleChat=function(){var e=this.previousElementSibling,t=this.firstChild,n=this.lastChild;0==parseFloat(getComputedStyle(e,null).height.replace("px",""))?(t.nodeValue="Close Chat",e.style.height="400px",n.style.transform="rotate(180deg)"):(t.nodeValue="Open Chat",e.style.height="0",n.style.transform="rotate(0deg)")};for(i=0;i<btn.length;i++)btn[i].addEventListener("click",toggleChat,!1);
