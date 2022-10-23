document // 追加ボタンクリックした時の処理
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd())

// 未完了リストから指定の要素を削除
const deleteFromincomplateList = target =>
  document.getElementById('incomplate-list').removeChild(target)

const onClickAdd = () => {
  // 追加ボタンをクリックした時に実行される関数
  const inputText = document.getElementById('add-text').value //値の取得
  document.getElementById('add-text').value = '' // 初期化

  createIncomplateList(inputText)
}

// 未完了リストに追加する処理
const createIncomplateList = text => {
  // div生成
  const div = document.createElement('div') // タグ生成
  div.className = 'list-row' // タグ命名
  //liタグ生成
  const li = document.createElement('li') // タグ生成
  li.innerText = text // タグの間に文字を入れる

  //button(完了)タグ生成
  const complateButton = document.createElement('button')
  complateButton.innerText = '完了'
  complateButton.addEventListener('click', () => {
    // 完了ボタンクリックした際のイベントをボタン作成時に追加
    // 未完了リストから削除
    deleteFromincomplateList(complateButton.parentNode)

    // 押された完了ボタンの親タグ<div>を完了リストに追加。
    // 完了リストに追加する要素を取得
    const addTarget = complateButton.parentNode

    //TODO内容
    const text = addTarget.firstElementChild.innerText

    //div以下を初期化
    addTarget.textContent = null

    //liタグ生成
    const li = document.createElement('li')
    li.innerText = text

    // 戻すボタン作成
    const backButton = document.createElement('button')
    backButton.innerText = '戻す'
    backButton.addEventListener('click', () => {
      // 完了リストから削除
      const deleteTarget = backButton.parentNode
      document.getElementById('complate-list').removeChild(deleteTarget)

      //TODO内容
      const text = deleteTarget.firstElementChild.innerText
      createIncomplateList(text)
    })

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li)
    addTarget.appendChild(backButton)
    document.getElementById('complate-list').appendChild(addTarget)
  })

  //button(削除)タグ生成
  const deleteButton = document.createElement('button')
  deleteButton.innerText = '削除'
  deleteButton.addEventListener('click', () => {
    // 削除ボタンクリックした際のイベントをボタン作成時に追加
    // 押された削除ボタンの親タグ<div>を未完了リストから削除
    deleteFromincomplateList(deleteButton.parentNode)
  })

  //divタグの子要素に各要素を追加
  div.appendChild(li)
  div.appendChild(complateButton)
  div.appendChild(deleteButton)

  //未完了リストに追加
  document.getElementById('incomplate-list').appendChild(div)
}
