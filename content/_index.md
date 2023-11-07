---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:

  - block: slider
    content:
      slides:
      - title: 情報処理学会OS研究会
        content: 'システムソフトウェアやオペレーティングシステムに関する<br>🇯🇵 日本の研究者コミュニティです 👥'
        align: center
        background:
          image:
            filename: programmer.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: 研究発表会
        content: 'システムソフトウェアに関する最先端の<br>研究成果が発表されます ‍🧑‍🎓💻'
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

  - block: portfolio
    content:
      title: 最近のイベント
      filters:
        folders:
          - event
        tags: ['ComSys']
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
