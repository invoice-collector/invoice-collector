
import { SketchCollector } from '../../sketchCollector';

export class MentionCollector extends SketchCollector {

    static CONFIG = {
        id: "mention",
        name: "mention",
        description: "i18n.collectors.mention.description",
        version: "0",
        website: "https://web.mention.com/#settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7297.jpg",
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
        entryUrl: "https://web.mention.com/#settings/billing",
    }

    constructor() {
        super(MentionCollector.CONFIG);
    }
}
