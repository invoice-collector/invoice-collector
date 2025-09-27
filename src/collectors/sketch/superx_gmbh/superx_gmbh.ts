
import { SketchCollector } from '../../sketchCollector';

export class SuperxGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "superx_gmbh",
        name: "SuperX GmbH",
        description: "i18n.collectors.superx_gmbh.description",
        version: "0",
        website: "https://super-chat.eu.auth0.com/login?state=hKFo2SBhT2sxZjBiaE1fLTN1anFIRE9SS2dGV0JlWGQ2MDAzbKFupWxvZ2luo3RpZNkgQ0tJbWU5ZG1TRzlQVlIyQXlTUVd3SklPdmFUWjZ0cnKjY2lk2SBMUWRxRnRpNjRzcjljOTJMYUpXclR6cDZpelQ0YlpkZw&client=LQdqFti64sr9c92LaJWrTzp6izT4bZdg&protocol",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1326342.jpg",
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
        entryUrl: "https://super-chat.eu.auth0.com/login?state=hKFo2SBhT2sxZjBiaE1fLTN1anFIRE9SS2dGV0JlWGQ2MDAzbKFupWxvZ2luo3RpZNkgQ0tJbWU5ZG1TRzlQVlIyQXlTUVd3SklPdmFUWjZ0cnKjY2lk2SBMUWRxRnRpNjRzcjljOTJMYUpXclR6cDZpelQ0YlpkZw&client=LQdqFti64sr9c92LaJWrTzp6izT4bZdg&protocol",
    }

    constructor() {
        super(SuperxGmbhCollector.CONFIG);
    }
}
