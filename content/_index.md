---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:

  - block: slider
    content:
      slides:
      - title: <span>情報処理学会</span><span>OS研究会</span>
        content: 'システムソフトウェアやオペレーティングシステムに関する日本🇯🇵の研究者コミュニティです'
        align: center
        background:
          image:
            filename: programmer.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: 研究発表会
        content: 'システムソフトウェアに関する最先端の研究成果が発表されます 💻'
        align: left
        background:
          image:
            filename: symposium.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '300px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 10000

  - block: markdown
    content:
      text: |
        {{% callout warning %}}
        本サイトは現在のところ ComSys 2023 以降の情報のみ掲載しています。それ以前の情報については旧サイト http://www.ipsj.or.jp/sig/os/ をご参照ください。<br><br>ただし、旧サイトは https に対応してないため、最近の Google Chrome では http が自動的に https に変換されてしまい、"Not Found" と表示されます。お手数ですが、ブラウザで変換された https を http に手動で書き直してアクセスしてください。
        {{% /callout %}}
    design:
      columns: '1'

  - block: portfolio
    content:
      title: 最近のイベント
      filters:
        folders:
          - event
        tags: ['ComSys', 'Workshop']
        kinds:
          - page
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
        - name: ComSys
          tag: ComSys
        - name: 研究発表会
          tag: Workshop
      design:
        columns: '1'
        view: showcase
        flip_alt_rows: true

  - block: collection
    content:
      title: ニュース
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

#  - block: markdown
#    content:
#      title:
#      subtitle:
#      text: |
#        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
#    design:
#      columns: '1'
---
