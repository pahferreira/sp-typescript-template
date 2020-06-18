export default interface IRoute {
  path: string
  private?: boolean
  component: React.FunctionComponent
}
