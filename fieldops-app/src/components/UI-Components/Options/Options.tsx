import styles from "./Options.module.scss";

import type { OptionProps } from './Options.types'

const Options = ({ children }: OptionProps) => {
  return (
    <option> {children} </option>
  )
}

export default Options