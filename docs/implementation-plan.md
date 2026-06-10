# Focus Mode Activator - Implementation Plan

## Project Overview

Focus Mode Activator is a Chrome extension that helps users reduce distractions by controlling browser notifications during focused work sessions.

The extension supports two operating modes:

### Strict Blocking

Prioritizes maximum notification suppression and reliability.

### Normal Blocking

Prioritizes visibility and analytics while attempting to suppress notifications and gather distraction insights.

The implementation will be delivered incrementally through phases. Each phase should be completed, reviewed, and validated before moving to the next phase.

---

# Architecture Overview

The extension consists of the following high-level components:

### Popup Application

Provides user controls and status information.

### Background Service Worker

Acts as the central coordinator for Focus Mode state, session lifecycle, and extension-wide operations.

### Content Scripts

Interact with webpages and support notification-related functionality.

### Storage Layer

Persists settings, session information, and analytics data.

### Analytics Layer

Responsible for reporting, distraction insights, and session summaries.

---

# Roadmap Summary

## Phase 1 - Core Foundation

Establish extension state management, session lifecycle management, storage architecture, and mode management.

## Phase 2 - Notification Blocking Engine

Implement Strict Blocking and Normal Blocking foundations and connect them to the Focus Engine.

## Phase 3 - MVP User Experience

Implement popup controls, status indicators, session summaries, and user-facing interactions.

## Phase 4 - Analytics & Reporting

Implement session reports, domain tracking, notification statistics, and distraction insights.

## Phase 5 - Productivity Features

Implement keyboard shortcuts, whitelist management, and settings enhancements.

## Phase 6 - Automation

Implement scheduling, automatic activation, recurring focus sessions, and automation workflows.

## Phase 7 - Advanced Insights

Implement distraction scoring, historical analytics, trends, and advanced reporting.

---

# Phase 1 - Core Foundation

## Objective

Build the foundational architecture required for all future functionality.

At the end of this phase, the extension should understand:

* Whether Focus Mode is enabled
* Which blocking mode is selected
* Whether a focus session is active
* Session start and end times
* Persistent extension state

No notification blocking should be implemented during this phase.

No popup functionality should be implemented during this phase.

No reporting functionality should be implemented during this phase.

---

## Scope

### Included

* Extension state management
* Focus Mode state
* Blocking mode state
* Session lifecycle management
* Persistent storage foundation
* Background service worker foundation
* Messaging foundation
* Shared types and models
* State restoration on browser restart

### Excluded

* Notification blocking
* Notification interception
* Popup UI functionality
* Reports
* Analytics
* Whitelist support
* Keyboard shortcuts
* Scheduling
* Domain tracking

---

## Core Concepts

### Focus State

The extension must maintain a single source of truth representing whether Focus Mode is active.

Possible values:

* Enabled
* Disabled

---

### Blocking Mode

The extension must maintain the currently selected blocking mode.

Supported modes:

* strict
* normal

The selected mode should persist across browser sessions.

---

### Focus Session

A focus session begins when Focus Mode is activated.

A focus session ends when Focus Mode is deactivated.

Each session should contain:

* Unique identifier
* Start timestamp
* End timestamp (nullable while active)
* Duration (calculated later)
* Selected blocking mode

No analytics data should be stored yet.

---

## Required Data Models

The phase should establish shared models that future phases can build upon.

Examples include:

### Focus Mode State

Represents:

* Current enabled status
* Current mode
* Active session identifier

---

### Focus Session

Represents:

* Session identifier
* Start time
* End time
* Mode used

---

### Extension Settings

Represents:

* Selected mode
* Future configuration placeholders

Only minimal fields should be implemented.

---

## Storage Requirements

Create a reusable storage abstraction layer.

The storage layer should support:

* Saving Focus State
* Loading Focus State
* Saving Session Data
* Loading Session Data
* Updating Session Data

Future phases should not access browser storage directly.

All storage interactions should flow through the storage layer.

---

## Service Worker Responsibilities

The background service worker should become the central authority for extension state.

Responsibilities:

### Initialization

On startup:

* Load persisted state
* Restore Focus Mode state
* Restore active session information

---

### Session Management

Support:

* Start Session
* End Session

---

### State Management

Support:

* Enable Focus Mode
* Disable Focus Mode
* Change Mode

---

### Logging

Add structured development logs for:

* Initialization
* Session creation
* Session completion
* State changes

These logs are temporary and primarily intended for development validation.

---

## Messaging Foundation

Create extension-wide messaging infrastructure.

The goal is to establish a consistent communication mechanism between:

* Popup
* Background Service Worker
* Content Scripts

No business logic should depend on content scripts yet.

The messaging layer should simply provide the foundation for future phases.

---

## Validation Criteria

Phase 1 is complete when the following can be verified:

### Focus State

* Focus Mode can be enabled programmatically.
* Focus Mode can be disabled programmatically.
* State persists correctly.

---

### Mode Management

* Strict mode can be selected.
* Normal mode can be selected.
* Mode persists correctly.

---

### Session Lifecycle

* Session starts when Focus Mode is enabled.
* Session ends when Focus Mode is disabled.
* Session data is persisted.

---

### State Restoration

After browser restart:

* Previous state is restored.
* Active session information is restored.

---

### Architecture Validation

Future phases can use:

* Shared models
* Storage layer
* Messaging layer
* Service worker APIs

without requiring architectural changes.

---

# Phase 2 - Notification Blocking Engine

## Objective

Implement the first functional version of the notification blocking system.

This phase introduces the core behavior that makes Focus Mode valuable.

At the end of this phase:

* Focus Mode should actively affect browser behavior.
* Strict Blocking should suppress notifications using the chosen blocking strategy.
* Normal Blocking should attempt to detect notification activity and collect interruption events.
* Session data should begin recording notification-related activity.
* The extension should be capable of distinguishing between blocking modes.

No user-facing reporting should be implemented yet.

No analytics screens should be implemented yet.

No popup enhancements should be implemented yet.

The goal is to make the engine work before exposing the functionality through user interfaces.

---

## Scope

### Included

* Strict Blocking engine
* Normal Blocking engine
* Notification suppression foundation
* Notification interception foundation
* Domain detection foundation
* Session event recording
* Event storage integration
* Focus state integration
* Blocking mode integration

### Excluded

* Reports
* Analytics UI
* Session history UI
* Keyboard shortcuts
* Whitelist support
* Scheduling
* Distraction scoring
* Historical analytics

---

## Core Principle

The extension now supports two independent notification handling strategies.

### Strict Blocking

Prioritizes interruption prevention.

Primary goal:

Prevent notifications from reaching the user whenever Focus Mode is active.

Characteristics:

* Reliability first
* Analytics second
* Maximum suppression behavior
* Minimal event tracking requirements

---

### Normal Blocking

Prioritizes visibility and event collection.

Primary goal:

Attempt to suppress notifications while gathering interruption information.

Characteristics:

* Event-aware behavior
* Domain tracking
* Notification attempt detection
* Analytics foundation

---

## Strict Blocking Requirements

### Activation

When:

* Focus Mode is enabled
* Blocking mode is strict

The Strict Blocking engine should activate automatically.

---

### Deactivation

When:

* Focus Mode is disabled

The Strict Blocking engine should deactivate and restore normal browser behavior.

---

### State Awareness

The engine must always respect:

* Current Focus Mode state
* Current blocking mode

Blocking should never occur while Focus Mode is disabled.

---

### Session Awareness

The engine must associate activity with the currently active session.

Future phases may expand tracking capabilities, but session awareness must exist now.

---

## Normal Blocking Requirements

### Activation

When:

* Focus Mode is enabled
* Blocking mode is normal

The Normal Blocking engine should activate automatically.

---

### Notification Detection

The extension should attempt to detect notification creation activity whenever technically possible.

The purpose is to create an interruption-tracking foundation.

At minimum, the system should be capable of identifying:

* Notification event occurrence
* Timestamp
* Originating domain (when available)

---

### Notification Interception Foundation

The implementation should establish a reusable interception architecture.

Future phases may expand detection coverage.

The system should be designed to support:

* Additional notification sources
* Additional event types
* Future analytics requirements

without requiring architectural redesign.

---

## Domain Detection

Whenever a notification-related event is detected, the system should attempt to determine the originating website.

Examples:

* linkedin.com
* gmail.com
* facebook.com
* slack.com

The detected domain should become part of the recorded event.

---

## Event Recording

Phase 2 introduces notification-related event storage.

Events should be attached to the currently active session.

The purpose is to establish analytics-ready session data.

---

### Event Model

The event structure should support at minimum:

* Event identifier
* Session identifier
* Timestamp
* Domain
* Event type
* Blocking mode

Future phases may extend this structure.

The model should remain flexible.

---

## Session Integration

The existing session system from Phase 1 should now support event collection.

Example:

Session starts

↓

Notification activity occurs

↓

Event recorded

↓

Session ends

↓

Session contains event history

---

## Storage Requirements

The storage layer should support:

### Event Creation

Store newly detected events.

---

### Event Retrieval

Retrieve events associated with a session.

---

### Session Updates

Allow session records to grow as new events are detected.

---

### Persistence

Events should survive browser restart.

---

## Content Script Responsibilities

Content scripts may now participate in notification-related functionality.

Responsibilities include:

* Event detection
* Domain identification
* Event forwarding
* Communication with background services

Business logic should remain centralized whenever possible.

---

## Background Service Worker Responsibilities

The service worker remains the central coordinator.

Responsibilities include:

### Engine Activation

Activate the correct engine based on:

* Focus state
* Blocking mode

---

### Event Processing

Receive notification-related events.

Validate them.

Persist them.

Associate them with active sessions.

---

### State Coordination

Coordinate communication between:

* Storage
* Content scripts
* Future user interfaces

---

## Logging Requirements

Add structured logs for:

### Engine Lifecycle

* Engine activated
* Engine deactivated

---

### Event Lifecycle

* Event detected
* Event processed
* Event persisted

---

### Session Integration

* Event attached to session
* Session updated

These logs are intended for development validation.

---

## Validation Criteria

Phase 2 is complete when the following can be verified.

### Strict Blocking

* Strict mode activates correctly.
* Strict mode deactivates correctly.
* Strict mode responds to Focus Mode state changes.

---

### Normal Blocking

* Normal mode activates correctly.
* Notification activity can be detected where supported.
* Detected events are forwarded correctly.

---

### Domain Tracking

* Domain information can be captured.
* Domain information is attached to events.

---

### Event Storage

* Events are persisted.
* Events are associated with sessions.
* Events survive browser restart.

---

### Engine Coordination

* Correct engine activates based on selected mode.
* Engine switches correctly when mode changes.
* No engine remains active after Focus Mode is disabled.

---

## Deliverables

At the end of Phase 2 the extension should support:

✓ Focus Mode state management

✓ Session lifecycle management

✓ Strict Blocking engine

✓ Normal Blocking engine

✓ Notification event recording

✓ Domain event capture

✓ Session event storage

✓ Analytics-ready data collection foundation

The extension is not yet expected to provide user-facing reports or analytics views.

Those capabilities will be implemented in later phases.

---

# Phase 3 Placeholder

MVP User Experience

Details to be defined after Phase 2 completion and validation.

---

# Phase 4 Placeholder

Analytics & Reporting

Details to be defined after Phase 3 completion and validation.

---

# Phase 5 Placeholder

Productivity Features

Details to be defined after Phase 4 completion and validation.

---

# Phase 6 Placeholder

Automation

Details to be defined after Phase 5 completion and validation.

---

# Phase 7 Placeholder

Advanced Insights

Details to be defined after Phase 6 completion and validation.
