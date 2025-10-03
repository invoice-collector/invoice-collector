
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GroupeMericqCollector extends SketchCollector {

    static CONFIG = {
        id: "groupe_mericq",
        name: "GROUPE MERICQ",
        description: "i18n.collectors.groupe_mericq.description",
        version: "0",
        website: "https://new.mericq.com/commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/880047.jpg",
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
        entryUrl: "https://new.mericq.com/commandes",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GroupeMericqCollector.CONFIG);
    }
}
