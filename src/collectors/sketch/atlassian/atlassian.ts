
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AtlassianCollector extends SketchCollector {

    static CONFIG = {
        id: "atlassian",
        name: "Atlassian",
        description: "i18n.collectors.atlassian.description",
        version: "0",
        website: "https://id.atlassian.com/login?application=mac&continue=https://my.atlassian.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/530.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://id.atlassian.com/login?application=mac&continue=https://my.atlassian.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtlassianCollector.CONFIG);
    }
}
