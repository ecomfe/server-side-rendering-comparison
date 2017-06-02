import san from 'san';
import List from './list/index.san';
import Banner from './banner/index.san';

export default class App extends san.Component {
    static components = {
      's-banner': Banner,
      's-list': List
    };

    static template = `
      <div>
        <s-banner data="{{bannerData}}" />
        <s-list data="{{listData}}" />
      </div>
    `;
}
