---
title: 招待講演
weight: 51
---

## 招待講演1{#invite1}
{{<figure src="img/chiba.jpg" width="180px" height="180px">}}

### 千葉 滋（東京大学情報理工学系研究科創造情報学専攻・教授）
#### 「Polyglot プログラミングは日の目をみるか」

##### 概要

数多くのプログラミング言語が広く使われる時代になって久しく、複数の言語のプログラムを組合わせて一つのアプリケーション・ソフトウェアを開発する polyglot プログラミングも一般的になってきている。しかしながら密結合の polyglot プログラミングはまだまだ技術的な難しさがある。本講演では講演者らの研究を軸にこのような polyglot プログラミングのあれこれを紹介する。

##### 略歴

1996年東京大学理学系研究科博士課程退学、同年同大学より博士(理学)。東京大学、筑波大学、東京工業大学を経て 2011年より東京大学情報理工学系研究科創造情報学専攻・教授。2010年 IBM Faculty Award、2020年 AITO Test of Time Award 2000、2021年日本ソフトウェア科学会基礎研究賞など。

ホームページ: https://www.csg.ci.i.u-tokyo.ac.jp/


## 招待講演2{#invite2}

{{<figure src="img/nobori.jpg" width="180px" height="180px">}}

### 登 大遊（ソフトイーサ株式会社 代表取締役）

#### 「コンピュータ技術とサイバーセキュリティにおける日本の課題、人材育成法および将来展望」

##### 概要

現代日本社会はインターネットやクラウド等のサイバー技術に依存するようになった。ところが、サイバー空間においては、最近、極端な力のアンバランスが発生している。現在の日本には、米国や中国等の企業技術人と同水準の組織や人材の数が、とても少ない。世界に普及するようなサイバー技術を作れる人材が不足している。それどころか、各組織が安易で硬直的で脆いサイバーセキュリティ対策手法に依存した結果、日本組織の人材のコンピュータ・リテラシ低下はかなり深刻なレベルとなっており、基本的なサイバーセキュリティ上の自組織防衛能力すら有さない、極めて脆弱な状態にある。

この深刻な問題を解決し、世界最高レベルのサイバーセキュリティを実現するためには、サイバー空間を織りなす技術や構成要素、動作原理等の本質を広く深く理解し、かつ自ら技術革新が可能な日本人の数を、日本組織で増やす必要がある。そうすれば、彼らが実際に試行錯誤の結果新たなサイバー技術を作り出し、これらが自然に全世界で普遍的に利用される状況が作り出され、日本のサイバーセキュリティ能力は向上する。

すなわち、日本の組織やその人材が、サイバー空間の内側に埋没した単なる一ユーザーという現在の不満足な被治者の地位を卒業し、サイバー空間そのものを作っていく強力で高貴な治者の立場を獲得する必要があるのである。そのためには、日本の各組織における若手人材に、単にユーザーとして技術を使うだけでなく、自らサイバー技術を作り出すような試行錯誤を促す必要がある。そうすれば自律分散的・免疫的な組織的セキュリティ能力と技術力が、これから、日本の各組織から自然に発芽すると思われる。

##### 略歴

日本の企業や行政機関等のテレワークシステムや、世界中で 700 万ユーザー利用の SoftEther VPN セキュリティソフト等を開発しているソフトウェア技術研究経営者。2004 年に筑波大学在学中にソフトイーサ株式会社を起業。2017 年 博士(工学)。2017 年から筑波大学産学連携准教授 (2022 年から客員教授)、2018 年から 独立行政法人 情報処理推進機構 (IPA) サイバー技術研究室長。2020 年から NTT 東日本本社 特殊局員 (いずれも現役)。


## トップカンファレンス凱旋講演{#topconf}

### IIJ技術研究所 安形 憲一 様{#topconf1}

#### zpoline: a system call hook mechanism based on binary rewriting.
<u>Kenichi Yasukata</u>, Hajime Tazaki, and Pierre-Louis Aublin (IIJ Research Laboratory), Kenta Ishiguro (Hosei University).<br>
In Proceedings of the 2023 USENIX Annual Technical Conference, July, 2023.<br>
https://www.usenix.org/conference/atc23/presentation/yasukata
{{< spoiler text="Abstract" >}}
This paper presents zpoline, a system call hook mechanism for x86-64 CPUs. zpoline employs binary rewriting and offers seven advantages: 1) low hook overhead, 2) exhaustive hooking, 3) it does not overwrite instructions that should not be modified, 4) no kernel change and no additional kernel module are needed, 5) source code of the user-space program is not required, 6) it does not rely on specially-modified standard libraries, and 7) it can be used for system call emulation. None of previous mechanisms achieve them simultaneously.

The main challenge, this work addresses, is that it is hard to replace syscall/sysenter with jmp/call for jumping to an arbitrary hook function because syscall and sysenter are two-byte instructions, and usually more bytes are required to specify an arbitrary hook function address.

zpoline resolves this issue with a novel binary rewriting strategy and special trampoline code; in a nutshell, it replaces syscall/sysenter with a two-byte callq *%rax instruction and instantiates the trampoline code at virtual address 0. We confirmed zpoline is functional on the major UNIX-like systems: Linux, FreeBSD, NetBSD, and DragonFly BSD. Our experiments show that zpoline achieves 28.1~761.0 times lower overhead compared to existing mechanisms which ensure exhaustive hooking without overwriting instructions supposed not to be modified, and Redis and a user-space network stack bonded by zpoline experience only a 5.2% performance reduction compared to the minimum overhead case while the existing mechanisms degrade 72.3~98.8% of performance.
{{< /spoiler >}}

### 東京大学 品川 高廣 様{#topconf2}

#### Translation Pass-Through for Near-Native Paging Performance in VMs.
Shai Bergman and Mark Silberstein (Technion), <u>Takahiro Shinagawa</u> (The University of Tokyo), Peter Pietzuch and Llu&#237;s Vilanova (Imperial College London).<br>
In Proceedings of the 2023 USENIX Annual Technical Conference, July, 2023.<br>
https://www.usenix.org/conference/atc23/presentation/bergman
{{< spoiler text="Abstract" >}}
Virtual machines~(VMs) are used for consolidation, isolation, and provisioning in the cloud, but applications with large working sets are impacted by the overheads of memory address translation in VMs. Existing translation approaches incur non-trivial overheads: (i)~nested paging has a worst-case latency that increases with page table depth; and (ii)~paravirtualized and shadow paging suffer from high hypervisor intervention costs when updating guest page tables.

We describe Translation Pass-Through (TPT), a new memory virtualization mechanism that achieves near-native performance. TPT enables VMs to control virtual memory translation from guest-virtual to host-physical addresses using one-dimensional page tables. At the same time, inter-VM isolation is enforced by the host by exploiting new hardware support for physical memory tagging in commodity CPUs.

We prototype TPT by modifying the KVM/QEMU hypervisor and enlightening the Linux guest. We evaluate it by emulating the memory tagging mechanism of AMD CPUs. Our conservative performance estimates show that TPT achieves native performance for real-world data center applications, with speedups of up to 2.4× and 1.4× over nested and shadow paging, respectively.
{{< /spoiler >}}
