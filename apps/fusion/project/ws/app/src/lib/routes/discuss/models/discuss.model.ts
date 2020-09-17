export namespace NSDiscussData {
  export interface IDiscussJsonData {
    tabs: IDiscussionTab[]
  }

  export interface IDiscussionTab {
    name: string
    key: string
    badges: {
      enabled: boolean
      uri?: string
    }
    enabled: boolean
    routerLink: string
  }

  export interface IDiscussionData {
    cid: number
    tid: number
    uid: number
    mainPid: number
    slug: string
    title: string
    titleRaw: string
    lastposttime: number
    timestampISO: string
    lastposttimeISO: string
    timestamp: number
    upvotes: number
    downvotes: number
    viewcount: number
    postcount: number
    deleterUid: number
    deleted: boolean | number
    locked: boolean | number
    pinned: boolean | number
    thumb?: string | null
    category: ICategorie
    user?: IUser
    postIndex?: number
    teaser?: any
    tagWhitelist?: any[]
    tags: ITag[]
    minTags?: number
    maxTags?: number
    thread_tools?: []
    isFollowing?: boolean
    isNotFollowing?: boolean
    isIgnoring?: boolean
    isOwner?: boolean
    ignored?: boolean
    unread?: boolean
    bookmark?: any
    postSharing?: []
    deleter?: any | null
    merger?: any | null
    related?: []
    privileges?: any | null
    topicStaleDays?: number
    unreplied: boolean
    icons?: any[]
    index?: number
    votes?: number
    teaserPid: number | null | undefined
    pagination?: IPagination
    posts?: IPosts[]
  }

  export interface ITag {
    value: string
    valueEscaped: string
    color: string
    bgColor: string
    score: number
  }
  export interface ICategorie {
    bgColor: string
    backgroundImage?: string | null
    cid: number
    class?: string
    color?: string
    description?: string
    descriptionParsed?: string
    disabled: number
    icon?: string
    imageClass?: string
    isSection?: number
    link?: string
    name: string
    numRecentReplies?: number
    order?: number
    parentCid?: number
    post_count?: number
    slug: string
    topic_count?: number
    minTags?: number
    maxTags?: number
    totalPostCount?: number
    totalTopicCount?: number
    tagWhitelist?: []
    'unread-class'?: string
    children?: any[]
    posts?: any[]
    teaser?: any
  }
  export interface IRelatedDiscussion {
    id: number
    title: string
    category: string
    time: string
  }
  export interface IUser {
    uid: number
    username: string
    userslug: string
    reputation: number
    postcount: number
    topiccount?: number
    picture?: string | null
    signature?: string | null
    banned: number
    'banned:expire'?: number
    status: string
    lastonline?: number | null | undefined
    groupTitle?: string
    groupTitleArray?: string[]
    'icon:text'?: string
    'icon:bgColor'?: string
    lastonlineISO?: string
    banned_until?: number | boolean
    banned_until_readable?: string
    selectedGroups?: any[]
    custom_profile_info?: any[]
  }
  // export interface IPartialCategory {
  //   cid: number
  //   name: string
  //   slug: string
  //   class: string
  //   icon: string
  //   backgroundImage: string | null
  //   imageClass: string
  //   bgColor: string
  //   color: string
  //   disabled: boolean | number
  // }
  export interface IPagination {
    prev: IpageData
    next: IpageData
    first: IpageData
    last: IpageData
    rel?: any[]
    pages?: any[]
    currentPage: number
    pageCount: number
  }
  export interface IpageData {
    page: number
    active: boolean
  }
  export interface IEditor {
    uid: number
    username: string
    userslug: string
  }
  export interface IPosts {
    content: string
    pid: number
    tid: number
    timestamp: number
    uid: number
    deleted: number | boolean
    upvotes: number
    downvotes: number
    deleterUid: number
    edited: number | boolean
    votes: number
    timestampISO: string
    editedISO?: string
    index: number
    user: IUser
    editor?: IEditor | null
    bookmarked: boolean
    upvoted: boolean
    downvoted: boolean
    bookmarks?: number | null
    replies: {
      hasMore: false
      users: any[]
      text: any
      count: number
    }
    selfPost: boolean
    display_edit_tools: boolean
    display_delete_tools: boolean
    display_moderator_tools: boolean
    display_move_tools: boolean
    display_post_menu: boolean
  }
}
