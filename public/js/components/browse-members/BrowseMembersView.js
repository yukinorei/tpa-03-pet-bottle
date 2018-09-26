import { removeChildren } from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();
    // TODO: 動的にDOM要素を作成して、
    // "#container"というidを持つDIV要素の子要素として追加してください...
    this.rootEl.appendChild(
      <div>
        <div class="member-profile">
          <div class="member-image-box">
            <img src={thumbnailUrl} alt="会員のイメージ" />
          </div>
          <h3>名前</h3>
          <p class="member-name"><{name}</p>
          <h3>一言</h3>
          <p class="member-text">{quote}</p>
        </div>
        <button class="btn-next-member">次へ</button>
      </div>
    )
  }
}

export default BrowseMembersView;
