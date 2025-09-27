
import { SketchCollector } from '../../sketchCollector';

export class WallStreetJournalCollector extends SketchCollector {

    static CONFIG = {
        id: "wall_street_journal",
        name: "Wall Street Journal",
        description: "i18n.collectors.wall_street_journal.description",
        version: "0",
        website: "https://www.wsj.com/client/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16200.jpg",
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
        entryUrl: "https://www.wsj.com/client/login",
    }

    constructor() {
        super(WallStreetJournalCollector.CONFIG);
    }
}
