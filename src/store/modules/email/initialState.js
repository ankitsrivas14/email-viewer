import StaticEmails from '@/static/static-emails.js'

export default () => ({
    emails: JSON.parse(JSON.stringify(StaticEmails)),
})