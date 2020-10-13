import React from 'react'; 
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
      <div className="ui container comments">
         <div className="ui cards">
            <ApprovalCard>
               <CommentDetail author="Sam" timeAgo="Today" />
            </ApprovalCard>
            <ApprovalCard>
               <CommentDetail author="Max" timeAgo="Yesterday" />
            </ApprovalCard>
            <ApprovalCard>
               <CommentDetail author="Pete" timeAgo="Tomorrow" />
            </ApprovalCard>
         </div>
      </div>
   );
}

ReactDOM.render(<App />, document.querySelector('#root'));