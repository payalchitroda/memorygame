import React from 'react';
import Card from './Card/card';
import './board.css';
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [],
            count: 0,
            card1Id: "",
            card2Id: "",
            player: true,
            player1score: 0,
            player2score: 0,
            win: false,
        };

    }

    change = (id) => {

        let cardList = this.state.cardList;
        var cardIndex;
        for (var j = 0; j < cardList.length; j++) {
            if (cardList[j].id == id) {
                cardIndex = j;
                break;
            }
        }
        let card = cardList[cardIndex];
        if (this.state.count != 2)
            this.setState({ card1Id: this.state.card2Id, card2Id: cardIndex });
        // console.log(this.state.card1Id + "   ======" + this.state.card2Id)
        var count = this.state.count;
        if (this.state.count == 2) {

            let card1 = cardList[this.state.card1Id];
            let card2 = cardList[this.state.card2Id];
            //  console.log(card1.value+"------  "+card2.value)


            if (card1.value == card2.value) {
                // console.log("matched");
                this.state.player ? this.setState({ player1score: this.state.player1score + 1 }) : this.setState({ player2score: this.state.player2score + 1 })
                card1.flip = 2
                cardList[this.state.card1Id] = card1;
                card2.flip = 2
                cardList[this.state.card2Id] = card2;
            }
            else {
                card1.flip = (card1.flip == 1) ? 0 : card1.flip
                cardList[this.state.card1Id] = card1;
                card2.flip = (card2.flip == 1) ? 0 : card2.flip
                cardList[this.state.card2Id] = card2;
                this.setState({ player: !this.state.player });
                // console.log(this.state.player)
            }
            this.setState({ cardList: cardList, count: 0 });

            var cardflippedcount = 0;
            for (var j = 0; j < cardList.length; j++) {
                if (cardList[j].flip == 2) {
                    cardflippedcount++;
                }
            }
            if (cardflippedcount == (this.props.size * this.props.size)) {
                console.log(cardflippedcount)
                this.setState({ win: true });
            }
            return

        }

        // console.log("count" + this.state.count)
        if (card.flip == 0) {
            card.flip = 1;
            cardList[cardIndex] = card;
            count++
            this.setState({ cardList: cardList });

        }
        else {
            card.flip = 0;
            cardList[cardIndex] = card;
            count--
            this.setState({ cardList: cardList });
        }
        this.setState({ count: count });



        if (count == 2) {

            setTimeout(() => {
                this.change(id)
            }, 300);
        }
    }


    start = (size) => {
        var k = 0;
        var cardList = [];
        for (var i = 0; i < size * size; i++) {
            var value = k % (size * (size / 2));
            cardList.push({ id: k, value: value, flip: 0 })
            k++;
        }
        cardList.sort(() => Math.random() - 0.5)
        this.setState({ cardList: cardList });


    }
    restart = (size) => {
        this.setState({
            cardList: [],
            count: 0,
            card1Id: "",
            card2Id: "",
            player: true,
            player1score: 0,
            player2score: 0,
            win: false,
        });
        this.start(size)


    }



    render() {
        const { size } = this.props
        return (
            <div>
                <button onClick={() => this.start(size)}>Start</button>&nbsp;&nbsp;
                <button onClick={() => this.restart(size)}>Restart</button>

                <br />
                <div className='player'>{this.state.player ? 'Player1' : 'Player2'}</div>
                <div className='player1score'>Player1 score: {this.state.player1score}</div>
                <div className='winner'> {this.state.win ? ((this.state.player1score > this.state.player2score) ? "🥳Player1 wins🥳" : "🥳Player2 wins🥳") : ""}</div>
                <div className='player2score'>Player2 score: {this.state.player2score}</div>
                <br />
                <br />
                <div class={size == 4 ? 'grid1' : (size == 6 ? 'grid2' : 'grid3')}>
                    {this.state.cardList.map(cardList => (
                        <Card
                            id={cardList.id}
                            value={cardList.value}
                            flip={cardList.flip}
                            change={this.change}

                        />
                    ))}
                </div>

            </div >
        );
    }
}


export default Board;