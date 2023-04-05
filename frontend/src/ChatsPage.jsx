import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    
  return (
      <div style={{height:'100vh'}}>
          <PrettyChatWindow
                projectId='ad128760-a291-4e93-beb7-f07b49525348'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
          />
    </div>
  )
}

export default ChatsPage