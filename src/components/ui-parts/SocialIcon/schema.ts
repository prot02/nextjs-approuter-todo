
const IconTypeList = ['google']
export type IconType = typeof IconTypeList[number]

export type SocialIconType = {
  social: IconType;
}