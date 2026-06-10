# Focus Mode Activator - Product Requirements Document

## 1. Project Overview

Focus Mode Activator is a Chrome extension designed to help users work without interruptions by controlling browser notifications through a single-click Focus Mode.

When Focus Mode is enabled, websites should be prevented from interrupting the user with notifications. When Focus Mode is disabled, the user should be able to review a summary of the session and understand how much distraction was prevented during that period.

The extension should be simple to activate, lightweight, and focused on productivity.

---

# 2. Problem Statement

Modern websites frequently use notifications to re-engage users.

Examples include:

* Social media notifications
* Messaging applications
* Collaboration tools
* Email alerts
* Marketing and promotional notifications

These interruptions can significantly reduce focus and productivity.

Users need a simple mechanism to temporarily silence distractions without permanently changing browser settings.

---

# 3. Product Goals

The extension should:

* Allow users to activate Focus Mode with a single action.
* Reduce interruptions from websites while Focus Mode is active.
* Provide visibility into distraction activity during focus sessions.
* Support different blocking strategies depending on user preference.
* Support automation and customization for recurring workflows.
* Remain simple and easy to understand.

---

# 4. Core Concepts

## 4.1 Focus Mode

Focus Mode is the primary feature of the extension.

When Focus Mode is active:

* Notification interruptions should be suppressed according to the selected blocking mode.
* The extension should begin tracking a focus session.
* Session data should be collected for reporting purposes.

When Focus Mode is disabled:

* The active session should end.
* A session summary should become available.

---

## 4.2 Focus Session

A Focus Session represents a period during which Focus Mode remains active.

Each session should include:

* Session start time
* Session end time
* Session duration
* Selected blocking mode
* Session statistics
* Session report information

A new session begins whenever Focus Mode is activated.

A session ends whenever Focus Mode is deactivated.

---

## 4.3 Blocking Modes

The extension supports two blocking modes.

### Strict Blocking

Strict Blocking prioritizes interruption prevention.

Characteristics:

* Prioritizes maximum notification suppression.
* Prioritizes reliability over analytics.
* May provide limited reporting information.
* Intended for users who want the strongest focus protection.

Example:

A user enters a deep work session and wants to avoid all possible interruptions.

---

### Normal Blocking

Normal Blocking prioritizes visibility and analytics.

Characteristics:

* Attempts to suppress notifications while gathering additional insights.
* Supports richer reporting and analytics.
* May provide information about notification activity and distraction sources.
* Intended for users who want to understand which websites attempt to interrupt them.

Example:

A user wants to identify which websites are responsible for the majority of distractions.

---

# 5. Primary User Flow

## Standard Focus Session

User opens extension.

↓

User selects a blocking mode.

↓

User activates Focus Mode.

↓

Notifications are suppressed according to the selected mode.

↓

User works without interruptions.

↓

User deactivates Focus Mode.

↓

User reviews session summary.

---

# 6. Functional Requirements

## FR-1 Focus Mode Toggle

The extension must allow users to:

* Activate Focus Mode.
* Deactivate Focus Mode.
* View the current Focus Mode status.

The current state should always be clearly visible.

---

## FR-2 Blocking Mode Selection

The extension must allow users to choose between:

* Strict Blocking
* Normal Blocking

The selected mode should remain active until changed by the user.

---

## FR-3 Session Tracking

The extension must track focus sessions.

Each session should record:

* Start time
* End time
* Duration
* Blocking mode used

The extension should be able to determine when a session begins and ends.

---

## FR-4 Session Summary

When a session ends, the user should be able to review a summary.

The summary may include:

* Session duration
* Blocking mode used
* Notifications prevented
* Activity insights
* Distraction information

The exact contents may vary depending on the selected blocking mode.

---

## FR-5 Notification Activity Tracking

The extension should attempt to gather information about notification activity whenever possible.

Potential information may include:

* Notification counts
* Notification sources
* Activity frequency
* Distraction patterns

The availability of this information may differ between blocking modes.

---

## FR-6 Keyboard Shortcut

Users should be able to activate or deactivate Focus Mode using a keyboard shortcut.

The shortcut should provide an alternative to opening the extension popup.

---

## FR-7 Whitelist Management

Users should be able to define websites that are exempt from Focus Mode restrictions.

Whitelisted websites should continue behaving normally while Focus Mode is active.

Example:

Whitelist:

* slack.com
* teams.microsoft.com

Result:

Notifications from those websites remain allowed.

---

## FR-8 Scheduling

Users should be able to configure automatic Focus Mode activation.

Examples:

* Weekdays from 9:00 AM to 5:00 PM
* Daily study hours
* Evening focus sessions

The extension should automatically activate and deactivate Focus Mode according to configured schedules.

---

## FR-9 Session History

The extension should retain information about previous sessions.

Users should be able to review historical focus activity.

Historical data may include:

* Session duration
* Session frequency
* Session statistics
* Trend information

---

## FR-10 Distraction Analytics

The extension should provide insights into distraction behavior.

Examples:

* Most distracting websites
* Notification frequency
* Interruption trends
* Domain-based statistics

The purpose of these insights is to help users understand and reduce sources of distraction.

---

## FR-11 Per-Domain Distraction Score

The extension should provide a distraction score for individual websites whenever sufficient data is available.

Examples:

* Low distraction
* Medium distraction
* High distraction

The scoring model should help users quickly identify the most disruptive websites.

---

# 7. User Interface Requirements

The extension should provide:

## Popup Interface

The popup should display:

* Focus Mode status
* Selected blocking mode
* Activation controls
* Session information

The popup should remain simple and easy to use.

---

## Settings Interface

The settings page should provide access to:

* Blocking preferences
* Keyboard shortcuts information
* Whitelist management
* Scheduling configuration
* Analytics preferences

---

## Reports Interface

The extension should provide a clear and readable reporting experience.

Reports should prioritize:

* Simplicity
* Readability
* Actionable insights

---

# 8. Non-Functional Requirements

## Performance

The extension should remain lightweight and responsive.

Focus Mode should activate quickly and without noticeable delays.

---

## Reliability

The extension should consistently maintain the selected Focus Mode state.

User settings should persist across browser restarts.

---

## Usability

The extension should be usable without requiring technical knowledge.

Common actions should require minimal interaction.

---

## Privacy

The extension should prioritize user privacy.

Data should remain local whenever possible.

The extension should not require unnecessary collection of personal information.

---

# 9. Out of Scope

The following are not required for the initial version:

* Cloud synchronization
* User accounts
* Authentication systems
* Multi-user support
* External backend services
* Team collaboration features
* Mobile applications

---

# 10. Success Criteria

The project will be considered successful if users can:

1. Activate Focus Mode with minimal effort.
2. Work with fewer notification interruptions.
3. Choose between Strict Blocking and Normal Blocking.
4. Review focus session summaries.
5. Configure schedules and whitelists.
6. Understand distraction patterns through reporting and analytics.
7. Maintain productivity with a simple and reliable workflow.
