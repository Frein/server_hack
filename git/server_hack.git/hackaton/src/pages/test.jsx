import React from "react";
import {  Link } from "react-router-dom";


class Test extends React.Component{
    componentWillMount() {
        this.setState({
            currentQuestionId:1,
            currentAnswerId:0,
            correctCount:0,
            questionsCount:2,
            questions:[{
                id:1,
                question:'1/11 Вам звонит с незнакомого номера представитель банка и запрашивает PIN-код или трехзначный код с обратной стороны бакновской карты. Ваши действия:',
                answers:[
                    {
                        id:101,
                        text: ' Номер карты',
                        isValid: false,
                        comment: 'Неверно. Это могут быть мошенники. Лучше повесить трубку и позвонить в банк самому (телефон взять с банковской карты или с официального сайта банка). При этом пин-код и CVC не надо сообщать даже в этом случае. Сотрудники банка их никогда не спрашивают и они ин не требуются.',
                    },
                    {
                        id: 102,
                        text: ' CVC (трехзначный код с обратной стороны карты)',
                        isValid: false,
                        comment: 'Неверно. Это могут быть мошенники. Лучше повесить трубку и позвонить в банк самому (телефон взять с банковской карты или с официального сайта банка). При этом пин-код и CVC не надо сообщать даже в этом случае. Сотрудники банка их никогда не спрашивают, и они им не требуются.',
                    },
                    {
                        id: 103,
                        text: ' Ничего из этого',
                        isValid: true,
                        comment: 'Верно. ',
                    }
                ]
            },
                {
                    id:2,
                    question:'2/11 Какой из этих паролей самый защищенный от взлома?',
                    answers:[
                        {
                            id:201,
                            text: 'SG2,87sZ!',
                            isValid: true,
                            comment: 'Чем длиннее пароль, чем больше в нём разных по содержанию символов (цифры, большие и маленькие буквы, спецсимволы), тем он надёжнее',
                        },
                        {
                            id: 202,
                            text: '123456',
                            isValid: false,
                            comment: 'Чем длиннее пароль, чем больше в нём разных по содержанию символов (цифры, большие и маленькие буквы, спецсимволы), тем он надёжнее',

                        }
                    ]
                },
                {
                    id:3,
                    question:'3/11 Какой из этих паролей самый защищенный от взлома?',
                    answers:[
                        {
                            id:301,
                            text: 'xakep.ru',
                            isValid: false,
                            comment: 'Нормальный сайт, но не почтовый',
                        },
                        {
                            id: 302,
                            text: 'google.com',
                            isValid: true,
                            comment: 'Отличное решение',
                        }
                    ]
                }]
        })
    }

    click(a,questionId){
        if(this.state.currentAnswerId===0){
        this.setState( {
            currentAnswerId: a.id,
            correctCount: a.isValid? this.state.correctCount+1:this.state.correctCount
        })
        }
    }

    onNextClick(){
        this.setState({currentQuestionId:this.state.currentQuestionId+1,
            currentAnswerId:0
        })

    }
    render(){
        if(this.state.currentQuestionId>this.state.questions.length)
            return (<div className = 'test_main'>
                <div className='test_box' >
                    <div>Success {this.state.correctCount}/{this.state.questions.length}</div>
                    <a href='https://artdegas95.wixsite.com/cybersafety'>Записаться на курс по кибербезопасности</a>
                </div></div>)

        let question = this.state.questions.find(q=>q.id===this.state.currentQuestionId);
        return (<div className = 'test_main'>
            <div className='test_box' >
                <div className='title' > Безопасны ли ваши данные в интернете?</div>
                <div className='question'>{question.question} </div>
                {
                    question.answers.map(a=>(<div>
                        <div className='rectStyle' onClick={()=>this.click(a, question.id)}>
                            <div className='answerStyle' > {a.text}</div>
                        </div>

                            {
                                a.id ===this.state.currentAnswerId &&
                                <div className='rectStyle comment' >
                                    {a.isValid && <div className='answerStyle'> Все верно!</div>}
                                    {!a.isValid && <div className='answerStyle'>Увы, ошибка</div>}
                                    <div className='answerStyle'>{a.comment}</div>
                                </div>
                            }



                    </div>))
                }
                {
                    this.state.currentAnswerId!== 0 &&  <button className='button' onClick={()=>this.onNextClick()}>Next</button>
                }
            </div>
        </div>)
    }
}

export default Test