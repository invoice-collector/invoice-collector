
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AnydeskCollector extends SketchCollector {

    static CONFIG = {
        id: "anydesk",
        name: "Anydesk",
        description: "i18n.collectors.anydesk.description",
        version: "0",
        website: "https://my.anydesk.com/migrate;jsessionid=3271D5C0D39AD6082DDF24FDA8886492",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11638.jpg",
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
        entryUrl: "https://my.anydesk.com/migrate;jsessionid=3271D5C0D39AD6082DDF24FDA8886492",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnydeskCollector.CONFIG);
    }
}
