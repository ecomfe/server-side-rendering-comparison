import san from 'san';
import styles from './styles';

export default class Banner extends san.Component {
    static template = `
      <div style="{{styles.container}}">
        <h2>San Banner: </h2>
        <div style="{{styles.list}}">
          <div s-for="item, idx in data" style="{{styles.item}}" onClick="onBannerClick(item)">
            <img src="{{item.img}}" style="{{styles.itemImg}}" />
          </div>
        </div>
      </div>
    `;


    onBannerClick(item) {
      alert('click banner:' + item.title);
    }

    initData() {
        return {styles};
    }
}