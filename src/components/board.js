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
        var k;
        for (var j = 0; j < cardList.length; j++) {
            if (cardList[j].id == id) {
                k = j;
                break;
            }
        }
        let card = cardList[k];
        this.setState({ card1Id: this.state.card2Id, card2Id: k });

        var count = this.state.count;
        if (this.state.count == 2) {
            let card1 = cardList[this.state.card1Id];
            let card2 = cardList[this.state.card2Id];
            if (card1.value == card2.value) {
                console.log("matched");
                this.state.player ? this.setState({ player1score: this.state.player1score + 1 }) : this.setState({ player2score: this.state.player2score + 1 })

            }
            else {
                card1.flip = false
                cardList[this.state.card1Id] = card1;
                card2.flip = false
                cardList[this.state.card2Id] = card2;
                this.setState({ player: !this.state.player });
                console.log(this.state.player)
            }
           // console.log("ccccount" + this.state.count)
            this.setState({ cardList: cardList, count: 0 });
            return

        }

       // console.log("count" + this.state.count)
        if (card.flip == false) {
            card.flip = !card.flip;
            cardList[k] = card;
            count++
            this.setState({ cardList: cardList });
            console.log(card.id);

        }
        else {
            card.flip = !card.flip;
            cardList[k] = card;
            count--
            this.setState({ cardList: cardList });
        }
        this.setState({ count: count });


        var cardflippedcount = 0;
        for (var j = 0; j < cardList.length; j++) {
            if (cardList[j].flip == true) {
                cardflippedcount++;
            }
        }
        if (cardflippedcount == this.props.size*this.props.size) this.setState({ win: true });

    }




    start = (size) => {
        var k = 0;
        var cardList = [];
        for (var i = 0; i < size*size; i++) {
                var value = k % (size * (size / 2));
                cardList.push({ id: k, value: value, flip: false })
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
                <button onClick={() => this.start(size)}>start</button>
                <button onClick={() => this.restart(size)}>Restart</button>

                <br />
                {this.state.player ? 'player1' : 'player2'}
                <br />
                player1score{this.state.player1score}
                <br />
                player2score{this.state.player2score}
                <br />
                <div class={size==4?'grid1':(size==6?'grid2':'grid3')}>
                {this.state.cardList.map(cardList => (
                    <Card
                        id={cardList.id}
                        value={cardList.value}
                        flip={cardList.flip}
                        change={this.change}

                    />
                ))}
                </div>
                <br />
                {this.state.win ? ((this.state.player1score > this.state.player2score) ? "player1 wins" : "player2 wins") : ""}
            </div >
        );
    }
}


export default Board;