
import { SketchCollector } from '../../sketchCollector';

export class TeamcalCollector extends SketchCollector {

    static CONFIG = {
        id: "teamcal",
        name: "TeamCal",
        description: "i18n.collectors.teamcal.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_19ZDeRKLLOK4qh0C/live_YWNjdF8xOVpEZVJLTExPSzRxaDBDLF9NcklrYlFhbVpJQWJQY01iMVZpSkJZdFZjb1ZaZ2Z5LDU5ODE2ODM10200LzDQkrfD?s=ap",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1496625.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://invoice.stripe.com/i/acct_19ZDeRKLLOK4qh0C/live_YWNjdF8xOVpEZVJLTExPSzRxaDBDLF9NcklrYlFhbVpJQWJQY01iMVZpSkJZdFZjb1ZaZ2Z5LDU5ODE2ODM10200LzDQkrfD?s=ap",
    }

    constructor() {
        super(TeamcalCollector.CONFIG);
    }
}
