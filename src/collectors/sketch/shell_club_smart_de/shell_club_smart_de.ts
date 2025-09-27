
import { SketchCollector } from '../../sketchCollector';

export class ShellClubSmartDeCollector extends SketchCollector {

    static CONFIG = {
        id: "shell_club_smart_de",
        name: "Shell Club Smart DE",
        description: "i18n.collectors.shell_club_smart_de.description",
        version: "0",
        website: "https://www.shellsmart.com/smart/account/transactions?site=de-de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/772762.jpg",
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
        entryUrl: "https://www.shellsmart.com/smart/account/transactions?site=de-de",
    }

    constructor() {
        super(ShellClubSmartDeCollector.CONFIG);
    }
}
