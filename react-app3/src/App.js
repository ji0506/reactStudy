import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Header(props) {
    return (
        <header className="App-header">
            <h1>
                <a
                    href='/'
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChange();
                    }}>{props.title}</a>
            </h1>
        </header>
    )
}

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topis.length; i++) {
        let t = props.topis[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'read/' + t.id}
                    onClick={event => {
                        event.preventDefault();
                        props.onChange(Number(event.target.id));
                    }}>{t.title}</a>
            </li>
        );
    }

    return (<nav>
        <ol>
            {lis}
        </ol>
    </nav>)
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    )
}



function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={event=>{
                event.preventDefault();
                props.onCreate(event.target.title.value,event.target.body.value);
            }}>
                <p><input type="text" name="title" placeholder='title' id="" /></p>
                <p><textarea name="body" placeholder='body'></textarea></p>
                <p><input type="submit" value="Create" /></p>
            </form>
        </article>
    )
}

function Update(props) {
    const [title,setTitle] = useState(props.title);
    const [body,setBody] = useState(props.body);
    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={event=>{
                event.preventDefault();
                props.onUpdate(event.target.title.value,event.target.body.value);
            }}>
                <p><input type="text" name="title" placeholder='title' value={title} id="" onChange={event=>{
                    setTitle(event.target.value);
                }} /></p>
                <p><textarea name="body" placeholder='body' value={body} onChange={evnet=>{
                    setBody(evnet.target.body);
                }}></textarea></p>
                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    )
}

function App() {
    const [mode,setMode] = useState('WELCOME');
    const [id,setId] = useState(null);
    const [nextId,setNextId] = useState(4);
    const [topics,setTopics] = useState([
        {
            id: 1,
            title: 'html',
            body: 'html is'
        }, {
            id: 2,
            title: 'css',
            body: 'css is'
        }, {
            id: 3,
            title: 'js',
            body: 'js is'
        }
    ]);
    let content = null
    let contextControl = null;

    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello,Web"></Article>
    } else if(mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length;i++)
        {
            if(topics[i].id === id)
            {
                title = topics[i].title;
                body = topics[i].body;
    
            }
        }

        content = <Article title={title} body={body}></Article>
        contextControl = 
            <><li><a href={'/update/'+id} onClick={event=>{
            event.preventDefault();
            setMode('UPDATE');
        }}>Update</a></li> 
        <li><input type="button" value="Delete" onClick={()=>{
            const newTopics = []
            for(let i=0; i< topics.length;i++)
            {
                console.log(topics[i].id + ":" + typeof topics[i].id + ", " + id + ": " + typeof id)
                if(topics[i].id !== id){
                    newTopics.push(topics[i]);
                }
            }
            setTopics(newTopics);
            setMode('WELCOME');
        }}></input></li>
        </>
    }else if(mode === 'CREATE')
    {
        content = <Create onCreate={(title,body)=>{
            const newTopic = {id:nextId,title:title, body:body}
            const newTopics = [...topics]
            newTopics.push(newTopic)

            setTopics(newTopics)
            setMode('READ')
            setId(nextId)
            setNextId(nextId+1)
        }}></Create>
    } else if(mode === 'UPDATE'){

        let title, body = null;
        for(let i=0; i<topics.length;i++)
        {
            if(topics[i].id === id)
            {
                title = topics[i].title;
                body = topics[i].body;
    
            }
        }

        content = <Update title={title} body={body} onUpdate={(title,body)=>{
            const updateTopic = {id:id, title:title,body:body};
            const newTopics = [...topics]
            for(let i=0; i<newTopics.length;i++)
            {
                if(topics[i].id === id)
                {
                    newTopics[i] = updateTopic;
                    break;
                }
            }
            setTopics(newTopics)
            setMode('READ')
        }}></Update>;
    }

    return (
        <div className="App">
            <Header
                title="REACT"
                onChange={() => {
                    setMode('WELCOME');
                }}/>
            <Nav
                topis={topics}
                onChange={(_id) => {
                    setMode('READ');
                    setId(_id);
                }}/>
              {content}
              <ul>
                    <li><a href='/create' onClick={event=>{
                    event.preventDefault();
                    setMode('CREATE');
                    }}>Create</a></li>
                    {contextControl}
              </ul>
        </div>
    );
}

export default App;
