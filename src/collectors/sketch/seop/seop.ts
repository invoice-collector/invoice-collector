import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SeopCollector extends SketchCollector {

    static CONFIG = {
        id: "seop",
        name: "Seop",
        description: "i18n.collectors.seop.description",
        version: "0",
        website: "https://seop.fr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtYBGCB3FnqYxqZCWu83YQzfmQM9l_vr_Bw&s",
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
        entryUrl: "https://www.seop.fr/mon-compte-en-ligne/je-me-connecte",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SeopCollector.CONFIG);
    }
}
