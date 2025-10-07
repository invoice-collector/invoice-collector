
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NewYorkS529CollegeSavingsProgramCollector extends SketchCollector {

    static CONFIG = {
        id: "new_york_s_529_college_savings_program",
        name: "New York\'s 529 College Savings Program",
        description: "i18n.collectors.new_york_s_529_college_savings_program.description",
        version: "0",
        website: "https://www.nysaves.org/nytpl/auth/ll.cs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3131823.jpg",
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
        entryUrl: "https://www.nysaves.org/nytpl/auth/ll.cs",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NewYorkS529CollegeSavingsProgramCollector.CONFIG);
    }
}
