import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    comment="Yay!"
                />
            </ApprovalCard>
                
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00PM"
                    comment="Cool blog"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Ben"
                    timeAgo="Yesterday at 5:00PM"
                    comment="Nice c bro"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// Reloading page
if (module.hot){
    module.hot.accept();
};