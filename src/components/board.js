import React from 'react';
import Card from './Card/card';
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [],
            cardFlipped: [],
            count: 0,
            card1Id: "",
            card2Id: "",
        };

    }


    change = (id) => {

        let cardList = [...this.state.cardList];
        var k;
        for (var j = 0; j < cardList.length; j++) {
            if (cardList[j].id == id) {
                k = j;
                break;
            }
        }
        let card = { ...cardList[k] };
        this.setState({ card1Id: this.state.card2Id, card2Id: k });

        var count = this.state.count;
        if (this.state.count == 2) {
            let card1 = { ...cardList[this.state.card1Id] };
            let card2 = { ...cardList[this.state.card2Id] };
            if (card1.value == card2.value) {
                console.log("matched");
            }
            else {
                card1.flip = false
                cardList[this.state.card1Id] = card1;
                card2.flip = false
                cardList[this.state.card2Id] = card2;
            }
            console.log("ccccount" + this.state.count)
            this.setState({ cardList: cardList, count: 0 });
            return

        }

        console.log("count" + this.state.count)
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

    }
    start = (size) => {
        var k = 0;
        var cardList = [];
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var value = k % (size * (size / 2));
                cardList.push({ id: k, value: value, flip: false })
                k++;
            }

        }
        cardList.sort(() => Math.random() - 0.5)
        this.setState({ cardList: cardList });


    }
    restart = (size) => {
        this.setState({
            cardList: [],
            cardFlipped: [],
            count: 0,
            card1Id: "",
            card2Id: "",
        });
        this.start(size)


    }



    render() {

        return (
            <div>
                <button onClick={() => this.start(this.props.size)}>start</button>
                <button onClick={() => this.restart(this.props.size)}>Restart</button>

                <br />
                {this.state.cardList.map(cardList => (
                    <Card
                        id={cardList.id}
                        value={cardList.value}
                        flip={cardList.flip}
                        change={this.change}

                    />
                ))}
            </div >
        );
    }
}


export default Board;