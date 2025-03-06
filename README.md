
<h1>What is Joscript.js</h1>

<ul>
<li>
 Joscript is an open source Javascript library that simplifies JavaScript code. It is dedicated to building and developing user interfaces on websites. The advantage of Joscript is that it does not impose a   
    specific style on the user; It works the way the user wants
</li>
<li>Jocript is easy to use even for beginners. It provides a set of tools and components that can be used to shorten javasceipt code to create attractive and interactive user interfaces.</li>

 <li>جوسكريبت دي مكتبة جافاسكريبت مفتوحة المصدر بتسهل كتابة أكواد جافاسكريبت، ومخصصة لتطوير واجهات المستخدم على الويب. الميزة في جوسكريبت إنها مش بتفرض عليك أسلوب معين، يعني بتشتغل بالطريقة اللي تناسبك.
المكتبة سهلة جدًا حتى للمبتدئين، وبتوفر مجموعة أدوات ومكونات تساعدك تختصر الأكواد وتبني واجهات مستخدم تفاعلية بسهولة. 🚀
</li>
</ul>

<h1>create joscript app</h1>

```jsx
npx joscriptjs create my-app
```
<br>
<br>

<div>



 المكتبه بتشتغل بفكره Api Route وDynamic Routes 
 <br>
يعني بكل بساطه  لو انت عندك اكثر من صفحه محتاج تتنقل ما بينهم مش محتاج تعرف مسارات يدويا
 <br>
 كل اللي عليك انك هتيجي جوه فولدر app داخل المشروع وهتعمل فولدر باسم الصفحه اللي انت عايز تروح لها 
 <br>
وداخل الفولدر ده هتعمل ملف page.js  واجباري لازم يكون اسمه page.js عشان يشتغل
<br>
<br>
والمكتبه ايضا بتدعم فكره  layout 
<br>
   يعني انت مثلا لو عندك  navbar وعايز تعرضه في كل الصفحات اللي هتكون في المشروع
<br>
 مش محتاج تنادي عليه اكثر من مره عشان يظهر في كل الصفحات 
<br>
كل اللي عليك انك هتعمل ملف اسمهlayout.js 
<br>
 وهتحط جواه ال navbar بتاعك او الحاجه اللي انت عايزها تظهر في كل الصفحات وهو اوتوماتيك هيضيف الحاجه دي في كل الصفحات
</div>

<img src="https://github.com/user-attachments/assets/9b1fd2dc-ceaa-4ece-bffc-329c00cf0165">


 <h1>Example</h1>
 <p>Accordingly, Welcome to joscript will be displayed in your browser</p>
 <p>المثال ده هيعرض لك عنصر h1  مكتوب جواه مرحبا بك في جوسكريبت</p>
 
 ```jsx
import { jo } from "../jo/jo.js;

function App() {

    return(
        jo('div', {class:'app ', id:'app' ,children:[

            jo('h1', {t:'Welcome to joscript'}),
           
        ]})
    )
}
export default App;
 ```

 <h1>Joscript features</h1>
 <p>Here are some of the plugins that the Joscript library offers </p>
 <p>فيما يلي بعض المكونات الإضافية التي توفرها مكتبة جوسكريبت </p>
 <div>
  <p>1 -create item by jo script</p>
  
  ```jsx
  // Create item
  jo('h1', {id:'h1', class:'h1', t:'welcome to joscript'}),
  ```
 </div>

<div>
 ؛(jo) هي فانكشن جاهزه بتستدعيها جوه الفايل اللي انت هتشتغل جواه وبتبدا تمرر ليها البيانات الخاصه بالعنصر
 <br>
اول قيمه بتاخدها الفانكشن هي اسم العنصر
 <br>
 ثاني قيمه بتكون عباره عن أوبجيكت { } تقدر جواه تضيف اي خصائص للعنصر ده على حسب نوعه زي   id او class {'class':x}
 
 لو عندك عنصر img مثلا تقدر تديله src وهكذا بنفس الطريقه تقدر تضيف اي خصائص  العنصر محتاجه
</div>
<br>
<br>
(jo) is a ready function that you call inside the file you will work in and start passing the data of the element to it
<br>
The first value that the function takes is the name of the element
<br>
The second value is an object { } inside which you can add any properties to this element according to its type such as id or class {'class':x}
<br>
If you have an img element for example, you can give it src and so on in the same way you can add any properties to the element you need


<br>
<br>
<br>
<hr>

<p> 2 - Add text to items</p>

```jsx
  // add text 
  jo('h1', { t:'welcome to joscript'}),
  ```

  <div>
   لو انت عندك عنصر زي مثلا h1  او p  او span وعايز تضيف جوه كلام 
   <br>
   بكل بساطه هتيجي جوه الاوبجكت تعرف حاجه اسمها  {"":t}  وتدي لها الكلام اللي انت عايزه زي ما واضح في المثال
   <br>
   <br>
   If you have an element like h1, p or span and you want to add some text inside it,
   <br>
   just go into the object and select something called {"":t} and give it the text you want, as shown in the example.
   <br>
   
  </div>

<hr>



<p> 3 - appind children to the item</p>

```jsx
  
jo('div', {children:[]}),

jo('div', {
  children: [

    jo("h1", { t: "welcome to joscript", class: 'title' }),
    jo("img", { src: "/joscript-logo.png", id: 'jo', width: "150px" }),

  ]
})


  ```

  <div>
  لو انت عندك div مثلا وعايز تضيف جواه عناصر تانيه بكل بساطه هتيجي جوه الاوبجكت تعرف حاجه اسمها children ودي بتاخذ منك array  []
   <br>
  وجوه أل array هتحط العناصر بتاعتك بنفس طريقه المكتبه
   <br>
   <br>
   <br>

   If you have a div element for example, and you want to add other elements inside it,
   <br>
   you just go into the object and add something called children,
   <br>
   and this takes you an array [], and inside the array, you will put your elements in the same way.
   
  </div>

<hr>

 <div>
 <p> 4 - Add style to items</p>
  
  ```jsx
  jo('h1', {t:'welcome to joscript', style:{color:'red'} }), // The item will be given a red color
  jo('h1', {t:'welcome to joscript'}, {color:'red'}), // Add style in another way
  ```
 </div>

 لو عايز تضيف ستايل على العنصر بكل بساطه وهتعرف حاجه اسمها style جوه الاوبجكت وتدي لها الاستايل اللي انت عايزه
 <br>
 او ممكن تمرر قيمه تالته للفنكشن واللي هي هتكون عباره عن اوبجيكت وتقدر جواه تحط الأستايل زي المثال

  <div>
   <br>
 <br>
 If you want to add a style to the element, you simply define something called style inside the object and give it the style you want.
   <br>
Or you can pass a third value to the function, which will be an object, and you can put the style inside it, as in the example.


<hr>
   
  <p>5 - Add an event to items</p>
  
  ```jsx
    jo('h1', {t:'Welcome to joscript', onclick:() => {} }),
  ```

لو عايز اضيف حدث على العنصر زي onclick أو onmousemove أو onmouseover
<br>
او اي حدث انت عايزه هتيجي جوه الاوبجيكت وتكتب اسم الحدث اللي انت عايز تنفذه 

 </div>
<br>
<br>

 If you want to add an event to the element like onclick, onmousemove, onmouseover, 
<br>
 or whatever event you want, you go inside the object and type the name of the event you want to execute.
 
<hr>
 

