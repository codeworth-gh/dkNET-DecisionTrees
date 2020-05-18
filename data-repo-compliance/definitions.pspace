DataRepoCompliance: consists of Open, FAIR, Citable, Trustworthy, Properties.

Open: one of closed, partiallyOpen, fullyOpen.
FAIR: consists of Findable, Accessible, Interoperable, Reusable.
Citable: one of notSupported, partiallySupported, fullySupported.
Trustworthy: one of significantConcerns, minorConcerns, noConcerns.

Findable:      one of notFindable, partiallyFindable, fullyFindable.
Accessible:    one of notAccessible, partiallyAccessible, fullyAccessible.
Interoperable: one of notInteroperable, partiallyInteroperable, fullyInteroperable.
Reusable:      one of notReusable, partiallyReusable, fullyReusable.

Properties: consists of OpenProps, FAIRProps, CitableProps,
                        TrustworthinessProps.

FAIRProps: consists of FindableProps, AccessibleProps,
                        InteroperableProps, ReusableProps.

OpenProps: consists of Restrictions, OpenFlags.
OpenFlags: some of humanAccessible, machineAccessible, openFormat, openLicense,
                    platformSupportsDataWork,
                    restrictionsNotJustified, authorizationRequired.
Restrictions: one of none, minimal, significant.

AccessibleProps: consists of MetadataPersistence, ReuseLicense, AccessibleFlags.

AccessibleFlags: some of persistentMetadata,
                         licenseOK,
                         stdApi[Accessible via standard API].

ReuseLicense: one of none, repositoryLevel, datasetLevel.

MetadataPersistence[Are the medatadata kept after the data is deaccessioned?]: one of
  no, byEvidence, byStatedPolicy.


FindableProps: consists of PersistentIdentifier, MetadataGrade, IdInMetadata, FindableFlags.
FindableFlags: some of humanAccessible, machineAccessible, internalSearchOK.
PersistentIdentifier: one of none, internalPID[Internally assigned identifier (e.g. UUID)],
                            externalPID[Externally assigned identifier (e.g. DOI)].
MetadataGrade: one of minimal, limited, rich.
IdInMetadata:  one of none[No IDs],
                      partial[Some study IDs are included, e.g., accession number but not DOI],
                      all[All study IDs are included in the metadata].

InteroperableProps: consists of MetadataFAIRness, MetadataReferenceQuality, StudyLinkage, InteroperableFlags.
InteroperableFlags: some of formalMetadataVocabularyOK,
                            fairMetadataOK,
                            qualifiedMetadataReferencesOK,
                            studyLinkageOK.
MetadataFAIRness: one of minimal[Minimal or no mapping to appropriate ontologies],
                         allowed[Metadata may conform to FAIR vocabulary, but it's not enforced],
                         enforced[Metadata must conform to a FAIR vocabulary].
MetadataReferenceQuality: one of freeText, informal, formal.
StudyLinkage: one of none, freeText, textualMetadata, machineReadableMetadata.

ReusableProps: consists of DocumentationLevel, CCLicenseCompliance, MetadataProvenance, DkNetMetadataLevel, ReusableFlags.
DocumentationLevel:  one of lacking, adequate, good, full.
CCLicenseCompliance: one of none, nonCompliant, adequate, good, full.
MetadataProvenance:  one of unclear, adequate, full.
DkNetMetadataLevel:  one of none, dataset, datasetAndSubject.
ReusableFlags: some of documentationOK,
                       dkNetMetadataOK,
                       communityStandard,
                       generalMetadata,
                       ccLicenseOK[Commons Compliant License.],
                       metadataProvenanceOK.

CitableProps: consists of OrcidAssociation, CitationMetadataLevel, MachineReadableLandingPage.
OrcidAssociation: one of none, supported, required.
CitationMetadataLevel: one of none, partial, full.
MachineReadableLandingPage: one of none, exists, supportsDataCitation.

TrustworthinessProps: consists of GovernanceTransparency, StakeholderGovernance, SourceOpen.
GovernanceTransparency: one of opaque, partial, full.
StakeholderGovernance: one of none, weak, good, full.
SourceOpen[Is the code running the repository released under an open source license?]: one of no, partially, yes.
