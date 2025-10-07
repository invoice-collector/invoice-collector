
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MytpboxCollector extends SketchCollector {

    static CONFIG = {
        id: "mytpbox",
        name: "myTPBox",
        description: "i18n.collectors.mytpbox.description",
        version: "0",
        website: "https://scoubidou26.mytpbox.com/TPBox?session=d6c8e0102748de2a2d0871f819df4259",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4397094.jpg",
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
        entryUrl: "https://scoubidou26.mytpbox.com/TPBox?session=d6c8e0102748de2a2d0871f819df4259",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MytpboxCollector.CONFIG);
    }
}
