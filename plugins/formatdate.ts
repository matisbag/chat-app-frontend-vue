import { format } from "date-fns"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatRelativeDate: (inputDate: Date | string) => {
        const date = inputDate instanceof Date ? inputDate : new Date(inputDate)
        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)

        if (format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")) {
          return `Today at ${format(date, "HH:mm")}`
        } else if (
          format(date, "yyyy-MM-dd") === format(yesterday, "yyyy-MM-dd")
        ) {
          return `Yesterday at ${format(date, "HH:mm")}`
        } else {
          const differenceInDays =
            (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
          if (differenceInDays < 7) {
            return format(date, "eeee 'at' HH:mm")
          } else {
            return format(date, "PPP 'at' HH:mm")
          }
        }
      },
    },
  }
})
