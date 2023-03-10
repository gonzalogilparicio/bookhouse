const products = [
    {
        id: '1',
        title: 'EL HECHIZO DEL AGUA',
        author:'Bonelli Florencia',
        publishinghouse: 'PLANETA',
        price: 5700,
        pages: 648,
        format: 'Rústica',
        ISBN: 9789504975847,
        category:'narrativa',
        img:'/assets/img/9789504975847.png',
        stock: 25,
        review: 'Brenda Gomez tiene una vida perfecta. Es una alumna destacada en la carrera de Ciencias Económicas, su novio es un joven ambicioso y con un gran futuro, sus amigas son leales, su familia la adora. Pero ella no es feliz. La domina un mundo interior complejo, plagado de sentimientos e ideas que oculta, porque la avergüenzan y la alejan del modelo que se impone seguir. De los secretos que esconde, uno la atormenta especialmente: ama a Diego Bertoni desde que tiene memoria; un amor extraño por varias razones, pero sobre todo un amor prohibido. ¿Quién soy yo en realidad? es la pregunta que Brenda jamás se formuló, y es, sin embargo, la que posee la llave para resolver los misterios que la definen, para acabar con la hipocresía que la condena a la infelicidad. ¿Reunirá el coraje para mirar en su interior y amar lo que realmente es? ¿Reunirá el valor para aceptar su amor por Diego y luchar por él?',
    },
    {
        id: '2',
        title: 'HISTORIAS DE LA BELLE EPOQUE ARGENTINA',
        author:'Balmaceda Daniel',
        publishinghouse: 'SUDAMERICANA',
        price: 4899,
        pages: 400,
        format: 'Rústica',
        ISBN: 9789500767897,
        category:'historia',
        img:'/assets/img/9789500767897.png',
        stock: 10,
        review: 'Este libro es una invitación a recorrer los espléndidos años dorados de la Belle ‰poque argentina. De las últimas décadas del siglo XIX al Centenario de la Revolución de Mayo, en 1910, y los años previos a la Primera Guerra Mundial. Una época de gran prosperidad, cuando el porvenir era esperanza y desarrollo. Tiempos de inmigración masiva; de inicio del ocio, de la gastronomía, del transporte y de mujeres que, por primera vez, se animaban a reclamar sus derechos. Espiamos el diario de Delfina Bunge y sus observaciones de quienes iban a misa, asistimos a un baile de fin de año, presenciamos el primer llamado telefónico, la aparición de los autos eléctricos, el miedo frente al primer vuelo en avión y el caso cero de una temible vuelta de la fiebre amarilla. ¿Cómo eran los dandis por esos días? ¿Cuántos años tenía el niño que quiso matar a Roca? ¿Cómo desbarató José Hernández una edición trucha del Martín Fierro? Decenas de casos de emprendedores que armaron un imperio con una máquina rudimentaria en un sótano: de Fort a Rigolleau. Historias nacidas de la incansable búsqueda que Daniel Balmaceda realiza desde hace años en periódicos, revistas y documentos inéditos de todo tipo, para descubrir y rearmar las piezas perdidas de nuestra historia.',
    },
    {
        id: '3',
        title: 'LOS SIETE MARIDOS DE EVELYN HUGO',
        author:'Jenkins Reid Taylor',
        publishinghouse: 'UMBRIEL',
        price: 5590,
        pages: 510,
        format: 'Rústica',
        ISBN: 9789874777737,
        category:'narrativa',
        img:'/assets/img/9789874777737.png',
        stock: 5,
        review: 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella ? ¿Por qué ahora ? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aún ignorando por qué Evelyn la ha elegido para escribir su biografía. Monique está decidida a aprovechar esa oportunidad para dar impulso a su carrera. Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Ángeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 - y desde luego, los siete maridos que tuvo en ese tiempo - Evelyn narra una historia de ambición implacable, amistad inesperada y un gran amor prohibido.',
    },
    {
        id: '4',
        title: 'EL TIEMPO DE LAS MOSCAS',
        author:'Piñeiro Claudia',
        publishinghouse: 'ALFAGUARA',
        price: 5299,
        pages: 600,
        format: 'Rústica',
        ISBN: 9789877389753,
        category:'narrativa',
        img:'/assets/img/9789877389753.png',
        stock: 2,
        review: 'Inés sale en libertad, después de quince años presa por haber asesinado a Charo, la amante de su ex marido. Su vida ha cambiado, pero así también la sociedad: el avance del feminismo, las leyes de matrimonio igualitario y del aborto, el lenguaje inclusivo. Inés, una ama de casa tradicional y a quien la maternidad no le resultó algo feliz, entiende que debe ser práctica y adaptarse a la nueva realidad. Aunque le cueste. Se asocia con la única amiga que hizo dentro de la cárcel, la Manca, y ponen una empresa doble: ella se ocupa de hacer fumigaciones y su socia de investigar como detective privada. Como unas Thelma y Louise del conurbano, Inés y la Manca enfrentan situaciones complicadas, con el deseo de reinventarse. Hasta que, inesperadamente, una de las clientas de Inés, la Señora Bonar, le propone un intercambio muy inquietante; como salida de las tinieblas del pasado, la propuesta puede inclinar la balanza peligrosamente hacia el lado desfavorable. Pero también puede cambiarles la vida.',
    },
    {
        id: '5',
        title: 'EL PODER DEL AHORA',
        author:'Tolle Eckhart',
        publishinghouse: 'DEBOLSILLO',
        price: 3599,
        pages: 190,
        format: 'Rústica',
        ISBN: 9789877250992,
        category:'autoayuda',
        img:'/assets/img/9789877250992.png',
        stock: 52,
        review: 'Este libro, considerado una obra maestra, puede crear una experiencia en los lectores y cambiar su vida.Su autor se convirtió en un maestro universal,un gran espíritu con un mensaje revelador:se puede alcanzar un estado de iluminación aquí y ahora.Es posible vivir libre del sufrimiento, la ansiedad y la neurosis. Para lograrlo tenemos que comprender nuestro papel de creadores del propio dolor. Es nuestra mente la que nos causa los problemas con su corriente de pensamientos constante sobre el pasado y preocupándose por el futuro.En un formato de preguntas y respuestas, es una invitación a la reflexión, que permitirá ver la vida con nuevos ojos y empezar a disfrutar del verdadero poder del ahora.',
    },
    {
        id: '6',
        title: 'VIOLETA',
        author:'Allende Isabel',
        publishinghouse: 'SUDAMERICANA',
        price: 6499,
        pages: 460,
        format: 'Rústica',
        ISBN: 9789500766647,
        category:'narrativa',
        img:'/assets/img/9789500766647.png',
        stock: 12,
        review: 'Violeta, la primera niña de una familia de cinco bulliciosos hermanos, viene al mundo un tormentoso día de 1920. Desde el principio su vida estará marcada por acontecimientos extraordinarios, pues todavía se sienten las ondas expansivas de la Gran Guerra cuando la gripe española llega a las orillas de su país sudamericano natal, casi en el momento exacto de su nacimiento. Gracias a la clarividencia del padre, la familia saldrá indemne de esta crisis para enfrentarse a una nueva, cuando la Gran Depresión altera la elegante vida urbana que Violeta ha conocido hasta ahora. Lo perderán todo y se verán obligados a retirarse a una región salvaje y remota del país. Allí Violeta alcanzará la mayoría de edad y tendrá su primer pretendiente... En una larga carta dirigida a una persona a la que ama por encima de todas las demás, Violeta rememora devastadores desengaños amorosos y romances apasionados, momentos de pobreza y también de prosperidad, pérdidas terribles e inmensas alegrías. Moldearán su vida algunos de los grandes sucesos de la historia: la lucha por los derechos de la mujer, el auge y la caída de tiranos y, en última instancia, no una sino dos pandemias.',
    },
    {
        id: '7',
        title: 'REVOLUCION',
        author:'Perez Reverte Arturo',
        publishinghouse: 'ALFAGUARA',
        price: 6499,
        pages: 510,
        format: 'Rústica',
        ISBN: 9789877389746,
        category:'narrativa',
        img:'/assets/img/9789877389746.png',
        stock: 15,
        review: 'Esta es la historia de un hombre, tres mujeres, una revolución y un tesoro. La revolución fue la de México en tiempos de Emiliano Zapata y Francisco Villa. El tesoro fueron quince mil monedas de oro de a veinte pesos de las denominadas maximilianos, robadas en un banco de Ciudad Juárez el 8 de mayo de 1911. El hombre se llamaba Martín Garret Ortiz y era un joven ingeniero de minas español. Todo empezó para él ese mismo día, cuando desde su hotel oyó un primer disparo lejano. Salió a la calle para ver qué ocurría, y a partir de ese momento su vida cambió para siempre... Revolución es mucho más que una novela sobre los dramáticos acontecimientos que sacudieron la república mexicana en el primer tercio del siglo XX. Es un relato de iniciación y madurez a través del caos, la lucidez y la violencia: el asombroso descubrimiento de las reglas ocultas que determinan el amor, la lealtad, la muerte y la vida.',
    },
    {
        id: '8',
        title: 'VERITY',
        author:'Hoover Colleen',
        publishinghouse: 'PLANETA',
        price: 4200,
        pages: 400,
        format: 'Rústica',
        ISBN: 9789504977629,
        category:'narrativa',
        img:'/assets/img/9789504977629.png',
        stock: 18,
        review: 'Lowen Ashleigh, autora al borde de la bancarrota, recibe un encargo que le cambiará la vida: Jeremy, el flamante marido de Verity Crawford, una de las autoras más importantes del momento, la contrata para terminar la serie de libros en la que trabajaba su mujer antes de sufrir un grave accidente que la ha dejado en coma. Lowen se instala en la mansion del matrimonio para poder trabajar en las notas en las que trabajaba Verity, con la esperanza de encontrar material suficiente para empezar con su encargo, pero lo que no esperaba descubrir en la caotica oficina es una autobiografía de la propia Verity, escondida para que nunca salga a la luz. Suspense de alto voltaje. Adictiva y con un twist final inesperado, consigue mantener en vilo al lector hasta el final.',
    },
    {
        id: '9',
        title: 'DESTROZA ESTE DIARIO',
        author:'Smith Keri',
        publishinghouse: 'PAIDOS',
        price: 4300,
        pages: 400,
        format: 'Rústica',
        ISBN: 9789501205336,
        category:'infantiles',
        img:'/assets/img/9789501205336.png',
        stock: 4,
        review: 'Sientes que deberías plasmar todo tu potencial artístico pero no sabes como? Destroza este diario es el libro con el que podrás dar rienda suelta a tu creatividad. Keri Smith anima a los propietarios de este diario a cometeractos destructivos agujereando sus páginas, añadiendo fotos para dibujar encima o pintando con cafe, con la intención de experimentar el verdadero proceso creativo. Puede que seas un experto destrozador y que hayas devorado uno o varios ejemplares de Destroza este diario. O tal vez esta sea tu primera vez (pst, puede que esta experiencia te cambie la vida). Sea como sea, no busques más, has encontrado el libro perfecto para destrozar. Destrozadores del mundo, esto es para ustedes! Vuelve Destroza este diario, uno de los mayores éxitos editoriales de los ultimos años, con una nueva cubierta para los fans más fieles de la autora.',
    },
    {
        id: '10',
        title: 'ENCUENTROS',
        author:'Rolon Gabriel',
        publishinghouse: 'BOOKET',
        price: 2000,
        pages: 400,
        format: 'Rústica',
        ISBN: 9789878435923,
        category:'psicología',
        img:'/assets/img/9789878435923.png',
        stock: 8,
        review: 'Este lado B del amor cuestionó sin miramientos los lugares comunes y decires cotidianos que, más de una vez, nos precipitan con su vértigo hacia la angustia, el dolor y la desilusión. Hoy, años más tarde de la primera edición, quienes lo hayan leído no sólo encontrarán en esta versión definitiva y aumentada un desarrollo mucho más acabado de la teoría vertida en la obra inicial, sino también un caso clínico inédito y un nuevo capítulo dedicado a los conceptos de necesidad, demanda y deseo. Pero, más que nunca, descubrirán intacta y sostenida la lúcida y aguda mirada de Gabriel Rolón, alguien que hizo y hace de Encuentros un libro fundamental y un material indispensable para entender que a pesar de sus asperezas el amor sigue siendo el motor más importante de nuestra vida.',
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}