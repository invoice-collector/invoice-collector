
import { SketchCollector } from '../../sketchCollector';

export class GitbookCollector extends SketchCollector {

    static CONFIG = {
        id: "gitbook",
        name: "Gitbook",
        description: "i18n.collectors.gitbook.description",
        version: "0",
        website: "https://app.gitbook.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1376440.jpg",
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
        entryUrl: "https://app.gitbook.com/",
    }

    constructor() {
        super(GitbookCollector.CONFIG);
    }
}
