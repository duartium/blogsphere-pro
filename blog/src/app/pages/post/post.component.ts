import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/core/models/BlogPost.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  codePost: string = '';
  post!: BlogPost;

  posts: BlogPost[] = [{ 
      id: 1,
      codePost: 'mas-alla-del-codigo-el-desafio-sin-fin-del-desarrollador-moderno', 
      title: 'Más Allá del Código: El Desafío Sin Fin del Desarrollador Moderno', 
      categories: ['angular', 'typescript', 'frontend'], 
      urlImage: '../../../../../assets/images/posts/1annie-spratt-sggw4-qDD54-unsplash.jpg',
      content: `<p>El ecosistema tecnológico avanza a un ritmo acelerado, el rol del desarrollador de software ha evolucionado más allá de simplemente resolver problemas de código.</p>
        <p class='my-5'><b>¿Cómo ha evolucionado el papel del desarrollador en la era digital?</b></p>
        <p>Originalmente, el desarrollador de software se centraba casi exclusivamente en habilidades técnicas: dominar lenguajes de programación, entender estructuras de datos y algoritmos, y resolver problemas complejos. Hoy, un desarrollador debe entender de UX/UI, tener nociones de marketing digital, ser un buen comunicador y, tener incluso un entendimiento básico de gestión de proyectos.</p>
        <p class='my-5'><b>Mentalidad de Aprendizaje Continuo</b></p>
        <p>La tecnología cambia rápidamente. Lo que hoy es vanguardia, mañana puede quedar obsoleto. No es suficiente con aprender un lenguaje o una herramienta; es vital mantenerse al día con las últimas tendencias, tecnologías y mejores prácticas.</p>
        <p class='my-5'><b>Navegando en la Marejada Tecnológica</b></p>
        <p>Rapidamente aparecen nuevos frameworks, librerías, mejoras en los lenguajes, plugins, bases de datos, servicios de terceros, herramientas de inteligencia artificial y más. Estamos en la cresta de una ola de innovación que parece no tener fin, y aunque esto es, sin duda, emocionante, también trae consigo su propio conjunto de desafíos.</p>
        <p class='my-5'><b>Para terminar…</b></p>
        <p>Esto fue escrito para animarme primeramente a mí y espero que también a ti. El desafío del desarrollador moderno, es sin duda, más amplio y complejo que nunca. Pero con este desafío viene la oportunidad de crecer y tener un impacto significativo en el mundo. Enfrentar estos desafíos con valentía, pasión y curiosidad es lo que nos lleva, verdaderamente, más allá del código.</p>
      `
    },
    { 
      id: 2,
      codePost: 'patron-singleton', 
      title: 'Patrón Singleton', 
      categories: ['c#', 'arquitectura-apps', 'backend'], 
      urlImage: '',
      content: `<p>El patrón Singleton exige tener una única instancia de una clase en toda la aplicación.</p>
        <p class='my-5'>Estos son algunos casos para los que es útil:</p>
        <ul>
          <li><b>Configuración Global: </b>Si tienes un archivo de configuración en tu aplicación, con <i>Singleton</i> no es necesario que lo leas cada vez lo quieras usar. Lo lees una vez y accedes a la información desde cualquier clase, controllers, etc.</li>
          <li><b>Conexiones a Bases de Datos:&nbsp;</b>Ayuda a asegurarte de que solo haya una conexión abierta a la vez.</li>
          <li><b>Caché:</b> Si tienes un sistema donde se consultan requisitos para un crédito, puedes almacenarlos temporalmente por un lapso de 30minutos (los que tú quieras) para ahorrar tiempo y recursos.</li>
        </ul>
        <h2 class='mt-5'><b>Características</b></h2>
        <p>Debe tener un solo constructor privado. Esto impide la creación directa de instancias.</p>
        <p>Debe tener una referencia static de sí misma.</p>
        <p>Debe tener un método public y static que es el punto de entrada a la instancia global.</p>
       
        <div class='wrapper-code-display'>
          <code style="color:#fff;word-wrap:normal;" >
          
          </code>
        
        </div>
      `
    }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.codePost = this.route.snapshot.paramMap.get('code-post') ?? '';
    this.post = this.posts.find(x => x.codePost === this.codePost) ?? {
      id: 0,
      codePost: '',
      title: '',
      categories: [],
      urlImage: '',
      content: ''
    };

  }


}
