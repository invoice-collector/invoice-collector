
import { SketchCollector } from '../../sketchCollector';

export class CompanionTeaCollector extends SketchCollector {

    static CONFIG = {
        id: "companion_tea",
        name: "Companion Tea",
        description: "i18n.collectors.companion_tea.description",
        version: "0",
        website: "https://wholesale.companiontea.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654617.jpg",
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
        entryUrl: "https://wholesale.companiontea.com/account",
    }

    constructor() {
        super(CompanionTeaCollector.CONFIG);
    }
}
