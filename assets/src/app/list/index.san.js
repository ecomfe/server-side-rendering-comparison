import san from 'san';
import styles from './styles';

export default class List extends san.Component {
    static template = `
      <div style="{{styles.container}}">
        <h2>VueList</h2>
        <div style="{{styles.list}}">
          <a s-for="item, idx in data" key={idx} style="{{styles.item}}" href="{{item.url}}">
            <img src="{{item.img}}" style={styles.itemImg} />
            <p style="{{styles.itemTitle}}">{{item.title}}</p>
            <p style="{{styles.itemPrice}}">
              <span>price: {{item.price}}</span>
            </p>
          </a>
        </div>
      </div>
    `;

    initData() {
        return {styles};
    }
}
